import Image from "next/image"

export default function Component() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-purple-200 overflow-hidden px-6 lg:px-12">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-100/50 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-700 leading-tight">About Us</h2>

            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </h3>

            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industrys standard dummy text ever since the 1500s, when an unknown printer.
              </p>

              <p>
                took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              </p>

              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop.
              </p>
            </div>
          </div>

          <div className="relative h-[600px] lg:h-[700px]">
            {/* First card - back left */}
            <div className="absolute top-0 left-0 w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-300">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yz1PcXnFxqKorWcVwe2cBxgp5fOCd6.png"
                alt="Beautiful mosque architecture"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-16 left-20 lg:left-24 w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-1 transition-transform duration-300 z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yz1PcXnFxqKorWcVwe2cBxgp5fOCd6.png"
                alt="Beautiful mosque architecture"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute top-32 left-40 lg:left-48 w-64 h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden shadow-2xl transform rotate-6 hover:rotate-12 transition-transform duration-300 z-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Yz1PcXnFxqKorWcVwe2cBxgp5fOCd6.png"
                alt="Beautiful mosque architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
