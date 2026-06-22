"use client";
import {
  Plane,
  Car,
  Building2,
  KeyRound,
  BadgeDollarSign,
  MapPinned,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop services with punctual drivers.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Car,
    title: "Outstation Trips",
    description:
      "Comfortable outstation travel for family, business, and leisure trips.",
    color: "from-cyan-500 to-sky-500",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: Building2,
    title: "Property Sale",
    description:
      "Buy and sell residential and commercial properties with confidence.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: KeyRound,
    title: "Property Rental",
    description:
      "Verified rental homes, apartments, offices, and commercial spaces.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: BadgeDollarSign,
    title: "Property Lease",
    description:
      "Long-term leasing solutions for residential and commercial properties.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: MapPinned,
    title: "Site & Land Sales",
    description:
      "Residential plots, commercial sites, and investment land opportunities.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="services"
      className="py-8 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>Our Services</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 mt-3"
          >
            <span className="text-blue-600">Sri Durga</span> Travel & Real Estate Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-2 text-sm text-slate-600 max-w-3xl mx-auto"
          >
            We provide reliable travel services and professional real estate
            solutions including property sales, rentals, leasing, and land investments.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 mx-auto mt-3 rounded-full"
          />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ 
                  y: -6,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-transparent cursor-pointer overflow-hidden"
              >
                {/* Gradient Hover Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Shine Effect */}
                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full" style={{ width: '150%' }} />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-7 h-7 ${service.iconColor} group-hover:text-white group-hover:scale-110 transition-all duration-300`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-sm text-slate-500 mb-3">
            Need a custom solution? We're here to help
          </p>
          <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm hover:scale-105">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}