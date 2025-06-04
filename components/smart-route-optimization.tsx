"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Package } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function SmartRouteOptimization() {
  const { t, isRtl } = useI18n()

  return (
    <section className="px-8 lg:px-16 xl:px-24 py-16">
      <div className="mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{t("smartRoute.title")}</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">{t("smartRoute.subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("smartRoute.apply.title")}</h3>
              <p className="text-gray-600 mb-6">{t("smartRoute.apply.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("smartRoute.apply.cta")}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("smartRoute.submit.title")}</h3>
              <p className="text-gray-600 mb-6">{t("smartRoute.submit.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("smartRoute.submit.cta")}
              </Button>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Package className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t("smartRoute.receive.title")}</h3>
              <p className="text-gray-600 mb-6">{t("smartRoute.receive.description")}</p>
              <Button variant="link" className="text-orange-500 p-0">
                {t("smartRoute.receive.cta")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
