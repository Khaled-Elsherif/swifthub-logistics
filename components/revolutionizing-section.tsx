"use client"

import { useI18n } from "@/lib/i18n"

export default function RevolutionizingSection() {
  const { t, isRtl } = useI18n()

  return (
    <section
      className="relative px-4 sm:px-8 lg:px-16 xl:px-24 py-10 sm:py-16 lg:py-20 bg-cover bg-center min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] lg:min-h-[700px]"
      style={{
        backgroundImage: "url('/images/background-ship.png')",
      }}
    >
      <div className="relative mx-auto w-full max-w-7xl h-full">
        {/* Responsive text position: static on mobile, absolute on large screens */}
        <div className="static lg:absolute top-8 lg:top-16 w-full max-w-full lg:max-w-md xl:max-w-xl right-0 lg:right-8 px-0 sm:px-0 lg:px-0">
          <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 leading-tight text-left">
            {t("revolutionizing.title")}
          </h2>
        </div>
      </div>
    </section>
  )
}
