"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Truck, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Header() {
  const { locale, setLocale, t, isRtl } = useI18n()

  const switchLanguage = (language: "en" | "ar") => {
    setLocale(language)
  }

  return (
    <header className="flex items-center justify-between px-8 lg:px-16 xl:px-24 py-4 bg-white">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
          <Truck className="w-4 h-4 text-white" />
        </div>
        <span className="text-xl font-bold text-gray-900">SwiftHub</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-900 font-medium">
          {t("header.home")}
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          {t("header.about")}
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          {t("header.services")}
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          {t("header.pricing")}
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900">
          {t("header.contact")}
        </a>
      </nav>

      <div className="flex items-center gap-4">
        {/* Language Switcher */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
              <Globe className="h-5 w-5 text-gray-600" />
              <span className="sr-only">Switch language</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="min-w-[120px]">
            <DropdownMenuItem
              onClick={() => switchLanguage("en")}
              className={`cursor-pointer ${locale === "en" ? "bg-orange-50 text-orange-600 font-medium" : ""}`}
            >
              <span className={`${isRtl ? "ml-2" : "mr-2"}`}>🇺🇸</span>
              {t("language.en")}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => switchLanguage("ar")}
              className={`cursor-pointer ${locale === "ar" ? "bg-orange-50 text-orange-600 font-medium" : ""}`}
            >
              <span className={`${isRtl ? "ml-2" : "mr-2"}`}>🇸🇦</span>
              {t("language.ar")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6">{t("header.getQuote")}</Button>
      </div>
    </header>
  )
}
