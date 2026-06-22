"use client";

import { Car, Building2, Phone, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-600/20 text-blue-300 text-sm font-medium border border-blue-500/20">
              Trusted Since 1998
            </span>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold text-white leading-tight">
              Sri Durga
              <span className="block text-blue-400">
                Tours & Travels
              </span>
              <span className="block text-3xl md:text-4xl mt-4 text-slate-300">
                & Real Estate
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-300 leading-8 max-w-2xl">
              Providing reliable travel services and professional real estate
              solutions across Bengaluru. From airport transfers and holiday
              packages to property sales, rentals, and investments.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="tel:+919980807508"
                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-100 transition"
              >
                <Phone size={20} />
                Call Now
              </a>

              <a
                href="https://wa.me/919980807508"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">

              <div>
                <h3 className="text-4xl font-bold text-white">
                  25+
                </h3>
                <p className="text-slate-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  1000+
                </h3>
                <p className="text-slate-400 mt-2">
                  Happy Clients
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-white">
                  24/7
                </h3>
                <p className="text-slate-400 mt-2">
                  Support
                </p>
              </div>

            </div>

          </div>

          {/* Right Side Cards */}
          <div className="grid gap-6">

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-blue-500/30 transition">

              <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6">
                <Car className="w-8 h-8 text-blue-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Tours & Travels
              </h3>

              <p className="text-slate-300 leading-7">
                Airport transfers, outstation trips, corporate travel,
                local sightseeing, holiday packages, and tempo traveller
                services across Karnataka.
              </p>

            </div>

            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/30 transition">

              <div className="w-16 h-16 rounded-2xl bg-cyan-600/20 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Real Estate
              </h3>

              <p className="text-slate-300 leading-7">
                Property sales, rentals, leasing, investment opportunities,
                residential properties, commercial spaces, and land acquisition services.
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}