"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { useI18n } from "@/lib/i18n"

// Fallback articles data in case translation fails
const fallbackArticles = [
  {
    title: "Smart Logistics Trends",
    date: "Published 2024",
    description: "Discover the latest trends in smart logistics and how technology is reshaping the industry.",
  },
  {
    title: "Reliable Shipping Strategies",
    date: "Published 2024",
    description: "Learn about proven shipping strategies that ensure reliable and cost-effective deliveries.",
  },
]

export default function LogisticsInsights() {
  const { t, isRtl } = useI18n()

  // Get articles from translations or use fallback
  const getArticles = () => {
    try {
      // Access nested translation data safely
      const translatedArticles = t("insights.articles")

      // Check if it's a valid array
      if (Array.isArray(translatedArticles) && translatedArticles.length > 0) {
        return translatedArticles
      }

      // If we have individual articles in the translation object
      const articles = []
      for (let i = 0; i < 2; i++) {
        const titleKey = `insights.articles.${i}.title`
        const dateKey = `insights.articles.${i}.date`
        const descriptionKey = `insights.articles.${i}.description`

        const title = t(titleKey)
        const date = t(dateKey)
        const description = t(descriptionKey)

        // Only add if we got actual translations (not just the keys back)
        if (title !== titleKey) {
          articles.push({ title, date, description })
        }
      }

      if (articles.length > 0) {
        return articles
      }

      // Fall back to hardcoded data if all else fails
      return fallbackArticles
    } catch (error) {
      console.error("Error getting articles:", error)
      return fallbackArticles
    }
  }

  const articles = getArticles()

  return (
    <section className="px-4 sm:px-6 lg:px-16 xl:px-24 py-10 sm:py-14 md:py-16">
      <div className="mx-auto w-full">
        <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 gap-6 sm:gap-0 ${isRtl ? "sm:flex-row-reverse" : ""}`}>
          <h2 className={`text-3xl sm:text-4xl font-bold text-gray-900 ${isRtl ? "text-right w-full sm:w-auto" : "w-full sm:w-auto"}`}>{t("insights.title")}</h2>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto">{t("insights.viewAll")}</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {articles.map((article, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={index === 0 ? "/images/men-women.jpg" : "/images/container.png"}
                alt={article.title}
                width={400}
                height={250}
                className="w-full object-cover h-48 sm:h-56 md:h-64"
              />
              <CardContent className="p-4 sm:p-6">
                <h3 className={`text-lg sm:text-xl font-bold text-gray-900 mb-2 ${isRtl ? "text-right" : ""}`}>{article.title}</h3>
                <p className={`text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 ${isRtl ? "text-right" : ""}`}>{article.date}</p>
                <p className={`text-gray-600 ${isRtl ? "text-right" : ""}`}>{article.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
