"use client"
import Image from "next/image"
import Link from "next/link"

const explosionproofcategory = {
  "air-conditioner": "Air Conditioner",
  coupler: "Coupler",
  "distribution-box": "Distribution Box (hexlon DBs)",
  "exhaust-fan": "Exhaust Fan",
  lights: "Lights",
  isolators: "Isolators",
  "Plug-and-Sockets": "Plug and Sockets",
  "Terminal-Box": "Terminal Box",
  "Pipe-Fittings": "Pipe Fittings",
  "control-button-switch": "Control Button Switch"
}

const explosionHref = `/products?category=${Object.keys(explosionproofcategory).join(",")}`
const solutions = [
  {
    title: "EXPLOSION PROOF",
    description: "Explosion- Proof products that give you total control in the most hazardous environments. Built to eliminate ignition risks while delivering uninterrupted performance.",
    image: "/category/2.jpg?height=150&width=250",
    href: explosionHref,
  },
  {
    title: "EV Charger", 
    description: "Revolutionizing EV charging with Explosion-Proof safety. Certified for use in flammable and individual zones. It delivers clean power, even in the harshest environments.",
    image: "/category/3.jpg?height=150&width=250",
    href: "/products?category=ev-charger",
  },
  {
    title: "Medium Voltage AVR",
    description: "Designed for industrial, utility, and infrastructure applications, the Medium Voltage AVR provides real-time voltage stabilization to ensure continuous, efficient, and safe operation of connected loads.  ",
    image: "/product/p92-1.jpeg?height=150&width=250",
    href: "/products?category=mv-avr",
    class: "object-contain", // 👈 ye dynamic class hai
  },
  {
    title: "Aviation Lights", 
    description: "High visibility lights for aircraft and helipads. Engineered to resist weather and explosive gases. Critical illumination for aviation zones and refineries.",
    image: "/category/1.jpeg?height=150&width=250",
    href: "/products?category=AVIATION-OBSTRUCTION-LIGHT",
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
           <h2 className="text-3xl font-bold mb-3">CATEGORIES</h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Comprehensive renewable energy solutions tailored for residential, commercial, and utility applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              style={{ boxShadow: "0px 2px 23px 8px #9696967d" }}
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={250}
                  height={150}
                  className={`w-full h-32 ${item.class || 'object-cover'} group-hover:scale-105 transition-transform duration-300`}
                  />
              </div>
              <hr />
              <div className="p-4">
                <h3 className="text-base font-bold mb-2 group-hover:text-primary-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm ">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* <div className="text-center mt-8">
          <Link
            href="/solutions"
            className="inline-flex items-center bg-emerald-600 text-white px-5 py-2 rounded-full hover:bg-emerald-700 transition-colors text-sm"
          >
            Explore All Solutions
          </Link>
        </div> */}
      </div>
    </section>
  )
}
