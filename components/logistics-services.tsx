"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Home, Plane } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function LogisticsServices() {
  const { t, isRtl } = useI18n()

  return (
    <section className="px-4 sm:px-6 lg:px-16 xl:px-24 py-10 sm:py-14 md:py-16">
      <div className="mx-auto w-full">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-6 sm:gap-0 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <div className={isRtl ? "text-right w-full sm:w-auto" : "w-full sm:w-auto"}>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">{t("services.title")}</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl">{t("services.description")}</p>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">{t("services.viewAll")}</Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-gray-900 text-white p-6 sm:p-8">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t("services.express.title")}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6">{t("services.express.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("services.express.cta")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 p-6 sm:p-8">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{t("services.doorToDoor.title")}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">{t("services.doorToDoor.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("services.doorToDoor.cta")}
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 p-6 sm:p-8">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Plane className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{t("services.international.title")}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6">{t("services.international.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("services.international.cta")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
