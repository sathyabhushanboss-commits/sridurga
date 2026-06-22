"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Home,
  KeyRound,
  ArrowRight,
} from "lucide-react";

export default function RealEstateHero() {
  return (
    <section
      id="real-estate"
      className="relative overflow-hidden py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50"
    >
      {/* Background Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              Real Estate Services
            </span>

            <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight text-slate-900">
              Property
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}Sale, Rent & Lease{" "}
              </span>
              Solutions
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-8">
              Sri Durga Groups provides professional real estate services
              including property sales, rentals, leasing, investment
              opportunities, residential properties, commercial spaces,
              apartments, villas, plots, and land acquisition services
              across Bengaluru and Karnataka.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  500+
                </h3>
                <p className="text-slate-500 mt-2">
                  Properties
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  100+
                </h3>
                <p className="text-slate-500 mt-2">
                  Rentals
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-600">
                  25+
                </h3>
                <p className="text-slate-500 mt-2">
                  Years
                </p>
              </div>

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
                  bg-gradient-to-r
                  from-blue-600
                  to-cyan-500
                  text-white
                  rounded-xl
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                "
              >
                Property Enquiry
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919980807508"
                className="
                  px-8
                  py-4
                  bg-white
                  border
                  border-slate-200
                  rounded-xl
                  font-semibold
                  text-slate-900
                  hover:shadow-lg
                  transition-all
                "
              >
                Call Now
              </a>

            </div>

          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >

            {/* Card 1 */}
            <div
              className="
                backdrop-blur-xl
                bg-white/80
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                <Building2 className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Property Sale
              </h3>

              <p className="text-slate-600 leading-7">
                Buy and sell residential properties, apartments,
                villas, plots, and commercial spaces with trusted
                professional guidance.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="
                backdrop-blur-xl
                bg-white/80
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                <KeyRound className="w-7 h-7 text-green-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Property Rental & Lease
              </h3>

              <p className="text-slate-600 leading-7">
                Verified rental homes, office spaces, commercial
                properties, and long-term leasing solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="
                backdrop-blur-xl
                bg-white/80
                border
                border-white/20
                rounded-3xl
                p-8
                shadow-xl
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-500
              "
            >
              <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
                <Home className="w-7 h-7 text-orange-600" />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Apartments, Villas & Sites
              </h3>

              <p className="text-slate-600 leading-7">
                Premium apartments, luxury villas, residential plots,
                commercial sites, and investment properties.
              </p>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}