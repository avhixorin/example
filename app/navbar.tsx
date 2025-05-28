import React from 'react'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const navLinks = ['Home', 'Features', 'Pricing', 'Contact']

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-sm rotate-45" />
          </div>
          <span className="text-xl font-bold text-gray-800">Name</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="hover:text-blue-600 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 transition-colors">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-blue-600 transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
