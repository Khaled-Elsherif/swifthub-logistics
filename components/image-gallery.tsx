import Image from "next/image"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    title?: string
    description?: string
  }[]
  className?: string
}

export default function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {images.map((image, index) => (
        <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={400}
            height={300}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {(image.title || image.description) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 text-white">
                {image.title && <h3 className="text-lg font-bold mb-1">{image.title}</h3>}
                {image.description && <p className="text-sm text-gray-200">{image.description}</p>}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
