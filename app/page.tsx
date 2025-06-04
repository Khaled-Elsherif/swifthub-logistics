import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import SmartRouteOptimization from "@/components/smart-route-optimization"
import TrustedByBusinesses from "@/components/trusted-by-businesses"
import LogisticsServices from "@/components/logistics-services"
import RevolutionizingSection from "@/components/revolutionizing-section"
import Statistics from "@/components/statistics"
import CustomerTestimonials from "@/components/customer-testimonials"
import LogisticsInsights from "@/components/logistics-insights"
import QuoteRequest from "@/components/quote-request"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <SmartRouteOptimization />
      <TrustedByBusinesses />
      <LogisticsServices />
      <RevolutionizingSection />
      <Statistics />
      <CustomerTestimonials />
      <LogisticsInsights />
      <QuoteRequest />
      <Footer />
    </div>
  )
}
