import { Lightbulb } from "lucide-react"

export default function Impact() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Impact</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Traditional payment systems in Africa create barriers for businesses and customers. Our solution transforms
            the payment experience for everyone involved.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
          {/* Before Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600 text-center md:text-left">Before</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Complex integration processes that take weeks or months to implement
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">High transaction fees eating into merchant profits</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Limited payment options forcing customers to abandon purchases
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Unreliable settlement times creating cash flow problems
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">Poor customer support when payment issues arise</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Lack of transparency in transaction reporting and analytics
                </span>
              </li>
            </ul>
          </div>

          {/* After Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600 text-center md:text-left">After</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Quick 5-minute setup with our streamlined onboarding process
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Competitive flat-rate pricing that maximizes your revenue
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Accept mobile money, crypto, cash, and wallet payments seamlessly
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Instant settlements in your local currency for better cash flow
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  24/7 dedicated support team ready to help when you need it
                </span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-base leading-relaxed">
                  Real-time dashboard with detailed insights and reporting
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* <div className="flex justify-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-blue-600" />
          </div>
        </div> */}
      </div>
    </section>
  )
}
