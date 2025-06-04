import ImageGallery from "@/components/image-gallery"
import { IMAGES } from "@/lib/images"

export default function GalleryPage() {
  const galleryImages = [
    {
      src: IMAGES.hero.cargoShip,
      alt: "Cargo ship on ocean",
      title: "Ocean Freight",
      description: "Large-scale cargo transportation across international waters",
    },
    {
      src: IMAGES.sections.containerShip,
      alt: "Container ship",
      title: "Container Shipping",
      description: "Efficient container-based logistics solutions",
    },
    {
      src: IMAGES.sections.portBackground,
      alt: "Port operations",
      title: "Port Operations",
      description: "State-of-the-art port facilities and operations",
    },
    {
      src: IMAGES.blog.logisticsTrends,
      alt: "Logistics trends",
      title: "Smart Logistics",
      description: "Technology-driven logistics innovations",
    },
    {
      src: IMAGES.blog.shippingStrategies,
      alt: "Shipping strategies",
      title: "Strategic Shipping",
      description: "Optimized shipping routes and strategies",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Logistics Gallery</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our world-class logistics operations and infrastructure that powers global commerce.
          </p>
        </div>

        <ImageGallery images={galleryImages} />
      </div>
    </div>
  )
}
