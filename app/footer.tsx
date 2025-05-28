import { Mail, Phone, MapPin, Twitter, Linkedin, Instagram, Facebook } from "lucide-react"

export default function Footer() {
  const productLinks = ["Admissions", "Charting", "Billing", "Outcomes"]

  const companyLinks = ["Features", "Why Name", "Blog", "Testimonials"]

  const supportLinks = ["Contact Us", "Privacy Policy", "Terms of Service"]

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ]

  return (
    <footer className="bg-white py-12 px-6 border-t border-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Company info */}
          <div className="space-y-6">
            {/* Logo and company name */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm transform rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">Name</span>
            </div>

            {/* Contact information */}
            <div className="space-y-3 text-gray-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-gray-400" />
                <span>Address</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a href="mailto:info@ritten.io" className="hover:text-blue-600 transition-colors">
                  mail
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a href="tel:215-328-4369" className="hover:text-blue-600 transition-colors">
                  phone
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Navigation links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Product column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support column */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-4 mt-12 pt-8 border-t border-gray-100">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-500 hover:text-white transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
