"use client"

import { Truck, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function Footer() {
  const { t, isRtl } = useI18n()

  return (
    <footer className="bg-gray-900 text-white px-8 lg:px-16 xl:px-24 py-16">
      <div className="mx-auto w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className={isRtl ? "text-right" : ""}>
            <div className={`flex items-center gap-2 mb-6 ${isRtl ? "flex-row-reverse" : ""}`}>
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Truck className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">SwiftHub</span>
            </div>
            <p className="text-gray-400 mb-6">{t("footer.description")}</p>
            <div className={`flex gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div className={isRtl ? "text-right" : ""}>
            <h3 className="font-bold mb-6">{t("footer.navigation")}</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("header.home")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("header.about")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("header.services")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("header.pricing")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("header.contact")}
              </a>
            </div>
          </div>

          <div className={isRtl ? "text-right" : ""}>
            <h3 className="font-bold mb-6">{t("footer.ourServices")}</h3>
            <div className="space-y-3">
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("footer.services.express")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("footer.services.doorToDoor")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("footer.services.international")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("footer.services.warehousing")}
              </a>
              <a href="#" className="block text-gray-400 hover:text-white">
                {t("footer.services.tracking")}
              </a>
            </div>
          </div>

          <div className={isRtl ? "text-right" : ""}>
            <h3 className="font-bold mb-6">{t("footer.contactInfo")}</h3>
            <div className="space-y-3 text-gray-400">
              <p>{t("footer.contact.email")}</p>
              <p>{t("footer.contact.phone")}</p>
              <p>{t("footer.contact.address")}</p>
            </div>
          </div>
        </div>

        <div className={`border-t border-gray-800 pt-8 text-center text-gray-400 ${isRtl ? "text-right" : ""}`}>
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  )
}
