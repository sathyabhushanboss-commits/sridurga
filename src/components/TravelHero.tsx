"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  Plane,
  Car,
  Bus,
  Phone,
  ArrowRight,
  MapPinned,
  Shield,
} from "lucide-react";

export default function TravelHero() {
  return (
    <section
      id="travel-services"
      className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 lg:py-28"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center px-5 py-3 rounded-full bg-cyan-500/20 text-cyan-300 font-medium border border-cyan-500/20"
            >
              Trusted Since 1998
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-5xl md:text-7xl font-bold leading-tight text-white"
            >
              Sri Durga Groups
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Tours & Travels
              </span>
            </motion.h1>

            <p className="mt-6 text-lg text-slate-300 leading-8">
              Premium airport transfers, outstation taxi services,
              corporate travel, holiday packages, sightseeing tours,
              tempo traveller rentals and customized travel solutions
              across Bengaluru and Karnataka.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp end={25} duration={3} />+
                </h3>
                <p className="text-slate-400 mt-2">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp
                    end={50000}
                    duration={3}
                    separator=","
                  />
                  +
                </h3>
                <p className="text-slate-400 mt-2">
                  Trips Completed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-cyan-400">
                  <CountUp
                    end={10000}
                    duration={3}
                    separator=","
                  />
                  +
                </h3>
                <p className="text-slate-400 mt-2">
                  Happy Clients
                </p>
              </div>

            </div>

            {/* Services Pills */}
            <div className="flex flex-wrap gap-3 mt-10">

              <div className="px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-cyan-300 text-sm">
                Airport Transfers
              </div>

              <div className="px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-cyan-300 text-sm">
                Outstation Trips
              </div>

              <div className="px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-cyan-300 text-sm">
                Corporate Travel
              </div>

              <div className="px-4 py-2 rounded-full bg-white/5 border border-cyan-500/20 text-cyan-300 text-sm">
                Tempo Traveller
              </div>

            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition-all"
              >
                Book Travel Service
                <ArrowRight size={18} />
              </a>

              <a
                href="tel:+919980807508"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-slate-900 font-semibold hover:shadow-xl transition-all"
              >
                <Phone size={18} />
                Call Now
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-5"
          >

            {/* Main Image */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop"
                alt="Airport Transfer Service Bengaluru"
                className="w-full aspect-video object-cover"
              />
            </motion.div>

            {/* Two Images */}
            <div className="grid md:grid-cols-2 gap-5">

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop"
                  alt="Outstation Taxi Service Karnataka"
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="overflow-hidden rounded-3xl shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
                  alt="Holiday Packages Karnataka"
                  className="w-full aspect-video object-cover"
                />
              </motion.div>

            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4 mt-2">

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                <Plane className="text-cyan-400 mb-3" />
                <p className="text-white text-sm">
                  Airport Pickup & Drop
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                <MapPinned className="text-cyan-400 mb-3" />
                <p className="text-white text-sm">
                  Karnataka Tours
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
                <Shield className="text-cyan-400 mb-3" />
                <p className="text-white text-sm">
                  Safe Travel
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}