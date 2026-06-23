"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const vehicleImages = [
  "/travel/t1.jpeg",
  "/travel/t2.jpeg",
  "/travel/t3.jpeg",
  "/travel/t4.jpeg",
  "/travel/t5.jpeg",
  "/travel/t6.jpeg",
  "/travel/t7.jpeg",
  "/travel/t8.jpeg",
  "/travel/t9.jpeg",
  "/travel/t10.jpeg",
  "/travel/t11.jpeg",
  "/travel/t12.jpeg",
  "/travel/t13.jpeg",
  "/travel/t14.jpeg",
  "/travel/t15.jpeg",
  "/travel/t16.jpeg",
  "/travel/t17.jpeg",
];

export default function Fleet() {
  // Duplicate array for seamless infinite loop on desktop
  const duplicatedImages = [...vehicleImages, ...vehicleImages];

  return (
    <section
      id="fleet"
      className="py-12 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="text-blue-400 font-semibold uppercase tracking-wider text-xs md:text-sm">
            Our Fleet
          </span>
          <h2 className="mt-2 md:mt-3 text-2xl md:text-4xl font-bold text-white">
            Travel in Comfort & Style
          </h2>
          <p className="mt-2 md:mt-3 text-slate-400 max-w-2xl mx-auto text-xs md:text-sm px-2">
            Well-maintained vehicles for airport transfers, corporate travel, 
            sightseeing, and outstation trips.
          </p>
        </div>

        {/* Mobile: 1-Column Grid - Shows ALL 17 Images */}
        <div className="md:hidden">
          <div className="grid grid-cols-1 gap-4">
            {vehicleImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Fleet vehicle ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <span className="text-slate-400 text-xs">
              {vehicleImages.length} Vehicles in Our Fleet
            </span>
          </div>
        </div>

        {/* Desktop: Infinite Marquee */}
        <div className="hidden md:block relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-slate-900 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-slate-900 to-transparent z-10" />

          <motion.div
            className="flex gap-4"
            animate={{
              x: [0, -100 * vehicleImages.length],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                className="relative flex-shrink-0 w-72 h-48 rounded-xl overflow-hidden group"
              >
                <Image
                  src={image}
                  alt={`Fleet vehicle ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </motion.div>

          <div className="text-center mt-6">
            <span className="text-slate-400 text-sm">
              {vehicleImages.length} Vehicles in Our Fleet
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}