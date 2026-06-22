"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Phone, 
  Car, 
  Plane, 
  Bus,
  Clock,
  Users,
  Award,
  Building,
} from "lucide-react";

export default function TravelHero() {
  return (
    <section
      id="travel-services"
      className="relative overflow-hidden py-16 bg-gradient-to-br from-blue-950 via-slate-900 to-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-medium">
              Trusted Since 1998
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="text-cyan-400">Sri Durga</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Tours & Travels{" "}
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-8">
              <span className="font-semibold text-white">Sri Durga Groups</span> provides premium 
              airport transfers, outstation trips, corporate travel, holiday packages, 
              tempo traveller rentals, and sightseeing tours across Bengaluru and Karnataka. 
              Experience comfort, safety, and reliability with India's most trusted travel partner.
            </p>

            {/* Travel Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">
              <div>
                <h3 className="text-4xl font-bold text-cyan-400">25+</h3>
                <p className="text-slate-400 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">50K+</h3>
                <p className="text-slate-400 mt-2">Trips Completed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">10K+</h3>
                <p className="text-slate-400 mt-2">Happy Clients</p>
              </div>
            </div>

            {/* Travel Services Quick Links */}
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-3 py-1.5 rounded-full bg-slate-800/50 text-cyan-300 text-sm border border-cyan-500/20">
                🚗 Airport Transfers
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/50 text-cyan-300 text-sm border border-cyan-500/20">
                🚐 Outstation Trips
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/50 text-cyan-300 text-sm border border-cyan-500/20">
                🏢 Corporate Travel
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/50 text-cyan-300 text-sm border border-cyan-500/20">
                🚌 Tempo Traveller
              </span>
              <span className="px-3 py-1.5 rounded-full bg-slate-800/50 text-cyan-300 text-sm border border-cyan-500/20">
                ✈️ Holiday Packages
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-xl
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  transition-all
                "
              >
                Book Travel Service
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919980807508"
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-8
                  py-4
                  rounded-xl
                  bg-white
                  text-slate-900
                  font-semibold
                  hover:shadow-xl
                  transition-all
                "
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>

            {/* Moving Service Bar - Travel */}
            <div className="overflow-hidden mt-12">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="flex gap-12 whitespace-nowrap text-cyan-300 font-medium"
              >
                <span>Sri Durga Tours & Travels</span>
                <span>🚗 Airport Transfers</span>
                <span>🚐 Outstation Trips</span>
                <span>🏢 Corporate Travel</span>
                <span>🚌 Tempo Traveller</span>
                <span>✈️ Holiday Packages</span>
                <span>🚕 Cab Rentals</span>
                <span>Sri Durga Tours & Travels</span>
                <span>🚗 Airport Transfers</span>
                <span>🚐 Outstation Trips</span>
                <span>🏢 Corporate Travel</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Image Layout - Travel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[520px] hidden lg:block"
          >
            {/* Airport Transfers - Top */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="
                absolute
                top-0
                left-10
                w-[420px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border border-cyan-500/20
              "
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop&crop=center"
                alt="Airport Transfer Service - Sri Durga Tours Bengaluru"
                className="w-full h-[240px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-4">
                <p className="text-white text-sm font-medium">Airport Transfers</p>
              </div>
            </motion.div>

            {/* Outstation Trips - Middle Right */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="
                absolute
                top-44
                right-0
                w-[320px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border border-cyan-500/20
              "
            >
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop&crop=center"
                alt="Outstation Taxi Service - Sri Durga Tours Karnataka"
                className="w-full h-[200px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">Outstation Taxi</p>
              </div>
            </motion.div>

            {/* Holiday Packages - Bottom Left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                absolute
                bottom-0
                left-0
                w-[320px]
                rounded-3xl
                overflow-hidden
                shadow-2xl
                border border-cyan-500/20
              "
            >
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&crop=center"
                alt="Holiday Packages - Sri Durga Tours Karnataka Tourism"
                className="w-full h-[200px] object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-3">
                <p className="text-white text-sm font-medium">Holiday Packages</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Sri Durga Tours and Travels",
            "description": "Sri Durga Tours and Travels provides premium airport transfers, outstation trips, corporate travel, holiday packages, tempo traveller rentals, and sightseeing tours across Bengaluru and Karnataka.",
            "image": "https://sridurgagroups.com/logo.png",
            "telephone": "+919980807508",
            "email": "info@sridurgagroups.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.9716,
              "longitude": 77.5946
            },
            "openingHours": "Mo-Su 06:00-22:00",
            "priceRange": "$$",
            "serviceType": [
              "Airport Transfers",
              "Outstation Trips",
              "Corporate Travel",
              "Tempo Traveller Rental",
              "Holiday Packages"
            ],
            "areaServed": {
              "@type": "City",
              "name": "Bengaluru"
            }
          })
        }}
      />
    </section>
  );
}