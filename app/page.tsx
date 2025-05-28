"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Zap,
  DollarSign,
  Smartphone,
  ShieldCheck,
  Sparkles,
  Activity,
} from "lucide-react";
import Audience from "./audience";
import AboutUs from "./aboutUs";
import Impact from "./aboutProduct";
import JoinUs from "./joinUs";
import Footer from "./footer";
export default function Component() {
  const navItems = ["About", "Impact", "Audience", "Join Us"];
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 relative">
      <header className="flex items-center sticky top-0 z-50 justify-between px-6 py-4 md:px-12">
        <div className="flex items-center">
          <div className="w-12 h-6 bg-gray-300 rounded-full text-center">
            Logo
          </div>
        </div>
        <ul className="hidden md:flex items-center space-x-14 text-gray-700 font-medium border-2 rounded-full px-6 py-2 bg-white/60 backdrop-blur-md">
          {navItems.map((item) => (
            <li
              key={item}
              className="hover:text-blue-600 transition-colors cursor-pointer"
              onClick={() =>
                document
                  .getElementById(item.toLowerCase().replace(" ", "-"))
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item}
            </li>
          ))}
        </ul>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer"
          onClick={() => (window.location.href = "/survey")}
        >
          Survey <ChevronRight className="inline-block ml-2" />
        </Button>
      </header>
      <main className="flex flex-col items-center justify-center px-6 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Lorem ipsum
            <br />
            Lorem ipsum
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            voluptatem magnam maiores tempora ipsam sunt impedit consequuntur
            dolores iusto
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <JoinUs />
          </div>
        </div>
      </main>
      <section className="px-6 pb-16 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>

            {/* Low-cost charges */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>

            {/* Access to channels */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Lorem ipsum
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Sticky CTA - Mobile only */}
      <div className="fixed bottom-4 left-0 right-0 z-50 md:hidden px-4">
        <div className="bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-between px-6 py-3">
          <span className="text-sm font-semibold">
            Start Accepting Payments
          </span>
          <a
            href="#"
            className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded-full ml-4 hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </div>

      <section className="bg-white px-6 py-20 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What the Product Does
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            magni mollitia amet ad impedit, beatae vel quibusdam, odit velit
            deserunt tenetur voluptatem alias deleniti ullam sunt totam corporis
            aliquid repudiandae.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
            <div className="flex flex-col items-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h4 className="font-semibold text-gray-800">Lorem ipsum</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Sparkles className="w-8 h-8 text-blue-600" />
              <h4 className="font-semibold text-gray-800">
                Lorem ipsum dolor sit
              </h4>
              <p className="text-gray-600 text-sm">
                loren ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <Activity className="w-8 h-8 text-blue-600" />
              <h4 className="font-semibold text-gray-800">Lorem ipsum dolor</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Impact />
      <Audience />
      <AboutUs />
      <Footer />
    </div>
  );
}
