"use client"

import { useI18n } from "@/lib/i18n"

export default function Statistics() {
  const { t } = useI18n()

  return (
    <section className="px-8 lg:px-16 xl:px-24 py-16 bg-white">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{t("statistics.users.value")}</div>
            <div className="text-gray-600">{t("statistics.users.label")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{t("statistics.customers.value")}</div>
            <div className="text-gray-600">{t("statistics.customers.label")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{t("statistics.offices.value")}</div>
            <div className="text-gray-600">{t("statistics.offices.label")}</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-900 mb-2">{t("statistics.projects.value")}</div>
            <div className="text-gray-600">{t("statistics.projects.label")}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
