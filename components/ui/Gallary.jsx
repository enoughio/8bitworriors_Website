import Image from "next/image"

export function ImageGallery() {
  const images = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Misty mountain peaks at sunrise",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Foggy forest road",
      className: "col-span-1 row-span-2",
    },
    {
      src: "/placeholder.svg?height=800&width=800",
      alt: "Mountain peaks under starry sky",
      className: "col-span-2 row-span-2",
    },
    {
      src: "/placeholder.svg?height=800&width=600",
      alt: "Misty mountain peaks with blue tones",
      className: "col-span-1 row-span-2",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Foggy forest landscape",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Red and white mushroom",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mountain landscape",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Forest scene",
      className: "col-span-1 row-span-1",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Mountain vista",
      className: "col-span-1 row-span-1",
    },
  ]

  return (
    <div className="bg-black min-h-screen p-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div key={index} className={`relative overflow-hidden rounded-lg ${image.className} group`}>
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

