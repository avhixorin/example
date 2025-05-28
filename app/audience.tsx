import Image from "next/image";

export default function Audience() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 flex items-center justify-center gap-3">Audience
        </h2>
        <div className="w-full flex flex-col md:flex-row items-center md:justify-between gap-8">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed md:max-w-md">
            Our payment solution is designed for forward-thinking businesses
            across Africa who want to expand their customer reach and streamline
            their payment processes. Whether you&apos;re a small retailer,
            e-commerce platform, service provider, or enterprise merchant, we
            make it simple to accept the payment methods your customers prefer
            while reducing costs and complexity.
          </p>
          <div className="w-full md:w-1/2 relative h-48 md:h-64">
            <Image
              src="/images/audience-illustration.png"
              alt="Audience using payment platform illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
