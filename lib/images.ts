// Image constants and utilities
export const IMAGES = {
  hero: {
    cargoShip: "/images/cargo-ship-hero.jpg",
  },
  sections: {
    containerShip: "/images/container-ship.jpg",
    portBackground: "/images/port-background.jpg",
  },
  blog: {
    logisticsTrends: "/images/logistics-trends.jpg",
    shippingStrategies: "/images/shipping-strategies.jpg",
  },
  placeholders: {
    avatar: "/placeholder.svg?height=40&width=40",
    card: "/placeholder.svg?height=200&width=300",
  },
} as const

// Image optimization settings
export const IMAGE_SIZES = {
  hero: { width: 600, height: 400 },
  section: { width: 500, height: 400 },
  blog: { width: 400, height: 250 },
  avatar: { width: 40, height: 40 },
} as const

// Image quality settings for different use cases
export const IMAGE_QUALITY = {
  hero: 90,
  section: 85,
  blog: 80,
  thumbnail: 75,
} as const
