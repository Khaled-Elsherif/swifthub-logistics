"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n"

export default function TrustedByBusinesses() {
  const { t, isRtl } = useI18n()

  return (
    <section className="px-8 lg:px-16 xl:px-24 py-16 bg-gray-50">
      <div className="mx-auto w-full">
        <div className={`grid lg:grid-cols-2 gap-12 items-center ${isRtl ? "lg:grid-cols-2" : ""}`}>
          <div className={isRtl ? "lg:order-2" : ""}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 ">{t("trusted.title")}</h2>
            <p className="text-lg text-gray-600 mb-8">{t("trusted.description")}</p>

            <div className="space-y-6">
              <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <div className={isRtl ? "text-right" : ""}>
                  <h3
                    className={`font-bold text-gray-900 mb-2 ml-10 ${isRtl ? "text-right" : ""}`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {t("trusted.features.delivery.title")}
                  </h3>
                  <p className="text-gray-600">{t("trusted.features.delivery.description")}</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <div className={isRtl ? "text-right" : ""}>
                  <h3
                    className={`font-bold text-gray-900 mb-2 ${isRtl ? "text-right" : ""}`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {t("trusted.features.tracking.title")}
                  </h3>
                  <p className="text-gray-600">{t("trusted.features.tracking.description")}</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <div className={isRtl ? "text-right" : ""}>
                  <h3
                    className={`font-bold text-gray-900 mb-2 ${isRtl ? "text-right" : ""}`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {t("trusted.features.cost.title")}
                  </h3>
                  <p className="text-gray-600">{t("trusted.features.cost.description")}</p>
                </div>
              </div>

              <div className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-3"></div>
                <div className={isRtl ? "text-right" : ""}>
                  <h3
                    className={`font-bold text-gray-900 mb-2 ml-10 ${isRtl ? "text-right" : ""}`}
                    dir={isRtl ? "rtl" : "ltr"}
                  >
                    {t("trusted.features.support.title")}
                  </h3>
                  <p className="text-gray-600 ">{t("trusted.features.support.description")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${isRtl ? "lg:order-1" : ""}`}>
            <Image
              src="/images/transport-logistics-concept-1.jpg"
              alt="Container ship"
              width={500}
              height={400}
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
