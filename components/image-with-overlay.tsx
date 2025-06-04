import Image from "next/image"

interface ImageWithOverlayProps {
  src: string
  alt: string
  width: number
  height: number
  overlay?: {
    title?: string
    subtitle?: string
    description?: string
  }
  className?: string
}

export default function ImageWithOverlay({ src, alt, width, height, overlay, className = "" }: ImageWithOverlayProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-6 left-6 text-white">
            {overlay.title && <h2 className="text-3xl font-bold mb-2">{overlay.title}</h2>}
            {overlay.subtitle && <h3 className="text-xl font-medium mb-3 text-orange-400">{overlay.subtitle}</h3>}
            {overlay.description && <p className="text-gray-200 max-w-md">{overlay.description}</p>}
          </div>
        </div>
      )}
    </div>
  )
}
