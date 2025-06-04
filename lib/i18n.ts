"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale } from "./translations"
import React from "react"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
  isRtl: boolean
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  const isRtl = locale === "ar"

  useEffect(() => {
    // Load saved locale from localStorage
    if (typeof window !== "undefined") {
      const savedLocale = localStorage.getItem("locale") as Locale
      if (savedLocale && (savedLocale === "en" || savedLocale === "ar")) {
        setLocaleState(savedLocale)
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Update document direction and language
      document.documentElement.dir = isRtl ? "rtl" : "ltr"
      document.documentElement.lang = locale

      // Save locale to localStorage
      localStorage.setItem("locale", locale)
    }
  }, [locale, isRtl])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[locale]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return React.createElement(
    I18nContext.Provider,
    { value: { locale, setLocale, t, isRtl } },
    children
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
