"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useI18n } from "@/lib/i18n"

export default function QuoteRequest() {
  const { t, isRtl } = useI18n()

  return (
    <section className="px-8 lg:px-16 xl:px-24 py-20 bg-gray-50">
      <div className="mx-auto w-full max-w-5xl bg-gray-50 rounded-3xl p-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t("quote.title")}</h2>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto">{t("quote.description")}</p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-sm">
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t("quote.form.name")}
              </label>
              <Input
                id="name"
                placeholder={t("quote.form.namePlaceholder")}
                className={`h-12 rounded-xl border-gray-200 ${isRtl ? "text-right" : "text-left"}`}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t("quote.form.email")}
              </label>
              <Input
                id="email"
                type="email"
                placeholder={t("quote.form.emailPlaceholder")}
                className={`h-12 rounded-xl border-gray-200 ${isRtl ? "text-right" : "text-left"}`}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t("quote.form.phone")}
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder={t("quote.form.phonePlaceholder")}
                className={`h-12 rounded-xl border-gray-200 ${isRtl ? "text-right" : "text-left"}`}
                dir={isRtl ? "rtl" : "ltr"}
              />
            </div>
          </div>

          <div className={`flex ${isRtl ? "justify-start" : "justify-end"}`}>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full">
              {t("quote.form.submit")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
