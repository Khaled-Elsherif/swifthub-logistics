"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Star } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export default function HeroSection() {
  const { t, isRtl } = useI18n()

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-8 sm:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto w-full max-w-7xl">
        {/* Text Content */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            {t("hero.title")}
            <br />
            <span className="text-teal-600 italic">{t("hero.deliveries")}</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Hero Image with Overlays - Full Width */}
        <div className="relative w-full mt-6 sm:mt-8">
          <div className="relative rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/transport-logistics-concept.jpg"
              alt={t("hero.imageAlt")}
              width={1920}
              height={800}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
              className="w-full h-[180px] xs:h-[240px] sm:h-[340px] md:h-[420px] lg:h-[500px] xl:h-[600px] object-cover"
              priority
            />

            {/* Top Centered Buttons Overlay */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 flex sm:flex-row gap-3 sm:gap-4 z-20 pointer-events-auto bg-white shadow-lg px-4 py-3 sm:p-4 rounded-b-[1.5rem] sm:rounded-b-[2.5rem]">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-md">
                {t("hero.services")}
              </Button>
              <Button
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 px-5 py-3 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full bg-white shadow-md hover:bg-orange-50"
              >
                {t("hero.contact")}
              </Button>
            </div>

            {/* Left Overlay - Users (desktop only) */}
            <div
              className={`hidden sm:block absolute top-6 ${isRtl ? "right-6" : "left-6"} z-20`}
            >
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-3 shadow-lg">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i}`}
                      alt={`User ${i}`}
                      width={32}
                      height={32}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-base">
                  {t("hero.users")}
                </span>
              </div>
            </div>

            {/* Right Overlay - Reviews (desktop only) */}
            <div
              className={`hidden sm:block absolute top-6 ${isRtl ? "left-6" : "right-6"} z-20`}
            >
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl px-4 py-2 flex items-center gap-2 shadow-lg">
                <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
                <span className="text-white font-semibold text-base">
                  {t("hero.reviewsCount")}{" "}
                  <span className="font-normal text-gray-200">
                    ({t("hero.reviewsLabel")})
                  </span>
                </span>
              </div>
            </div>

            {/* Mobile bottom overlays (users + reviews) */}
            <div className="sm:hidden absolute bottom-3 left-3 right-3 flex justify-between z-20">
              {/* Users */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <Image
                      key={i}
                      src={`https://i.pravatar.cc/40?img=${i}`}
                      alt={`User ${i}`}
                      width={24}
                      height={24}
                      className="rounded-full border-2 border-white w-6 h-6"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold text-xs">
                  {t("hero.users")}
                </span>
              </div>

              {/* Reviews */}
              <div className="bg-gray-900/60 backdrop-blur-md rounded-xl px-3 py-2 flex items-center gap-2 shadow-lg">
                <Star className="w-4 h-4 fill-orange-500 text-orange-500" />
                <span className="text-white font-semibold text-xs">
                  {t("hero.reviewsCount")}{" "}
                  <span className="font-normal text-gray-200">
                    ({t("hero.reviewsLabel")})
                  </span>
                </span>
              </div>
            </div>

            {/* Bottom gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
