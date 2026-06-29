"use client";
import {
  Plane,
  Car,
  Building2,
  KeyRound,
  BadgeDollarSign,
  MapPinned,
  MapPin,
  Bus,
  Ticket,
  CreditCard,
  ShoppingBag,
  Gem,
  Clock,
  Users,
  Award,
  Calendar,
  Star,
  TrendingUp,
  Shield,
  Headphones,
  Wifi,
  Coffee,
  Smartphone,
  Compass,
  Navigation,
  Globe,
  Radio,
  Target,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Counter Component with proper types
interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(easedProgress * target);
      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="font-bold">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Service type
interface Service {
  icon: any;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  iconColor: string;
  category: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  // Travel Services
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop services with punctual drivers. 24/7 availability with flight tracking.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop",
    features: ["Flight Tracking", "Meet & Greet", "Luggage Assistance"],
  },
  {
    icon: Car,
    title: "Outstation Trips",
    description:
      "Comfortable outstation travel for family, business, and leisure trips with experienced drivers.",
    color: "from-cyan-500 to-sky-500",
    bgColor: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
    features: ["Round Trip", "One Way", "Custom Packages"],
  },
  {
    icon: Bus,
    title: "Night Time Bus Services",
    description:
      "Safe and comfortable overnight bus services with sleeper berths, AC coaches, and onboard entertainment.",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=400&fit=crop",
    features: ["Sleeper Berths", "AC Coaches", "Entertainment"],
  },
  {
    icon: Ticket,
    title: "Ticket Booking",
    description:
      "Hassle-free online and offline ticket booking for buses, trains, and flights at the best prices.",
    color: "from-fuchsia-500 to-pink-500",
    bgColor: "bg-fuchsia-500/10",
    iconColor: "text-fuchsia-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop",
    features: ["Best Prices", "Easy Cancellation", "Instant Confirmation"],
  },
  {
    icon: Navigation,
    title: "Cab Booking",
    description:
      "Instant cab booking for local city rides, hourly rentals, and outstation trips with professional drivers.",
    color: "from-lime-500 to-emerald-500",
    bgColor: "bg-lime-500/10",
    iconColor: "text-lime-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&h=400&fit=crop",
    features: ["Instant Booking", "GPS Tracking", "Safe Rides"],
  },
  {
    icon: Gem,
    title: "All Luxury Vehicles",
    description:
      "Premium fleet including Mercedes, BMW, Audi, luxury SUVs, and high-end sedans for VIP travel experiences.",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-400",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=400&fit=crop",
    features: ["Premium Fleet", "Chauffeur Service", "VIP Experience"],
  },
  // Real Estate Services
  {
    icon: Building2,
    title: "Property Sale",
    description:
      "Buy and sell residential and commercial properties with confidence and expert guidance.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=400&fit=crop",
    features: ["Expert Guidance", "Legal Support", "Best Deals"],
  },
  {
    icon: KeyRound,
    title: "Property Rental",
    description:
      "Verified rental homes, apartments, offices, and commercial spaces with flexible terms.",
    color: "from-violet-500 to-purple-500",
    bgColor: "bg-violet-500/10",
    iconColor: "text-violet-400",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=400&fit=crop",
    features: ["Verified Properties", "Flexible Terms", "Maintenance"],
  },
  {
    icon: BadgeDollarSign,
    title: "Property Lease",
    description:
      "Long-term leasing solutions for residential and commercial properties with transparent agreements.",
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-500/10",
    iconColor: "text-amber-400",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=400&fit=crop",
    features: ["Long-term Leasing", "Transparent", "Legal Support"],
  },
  {
    icon: MapPinned,
    title: "Site & Land Sales",
    description:
      "Residential plots, commercial sites, and investment land opportunities in prime locations.",
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-500/10",
    iconColor: "text-rose-400",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=400&fit=crop",
    features: ["Prime Locations", "Investment Opportunities", "Legal Clearance"],
  },
];

// Stats type
interface Stat {
  icon: any;
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

// Stats for animated counters
const stats: Stat[] = [
  { icon: Users, value: 50000, label: "Happy Customers", suffix: "+" },
  { icon: Award, value: 15, label: "Years of Excellence", suffix: "+" },
  { icon: Calendar, value: 100000, label: "Trips Completed", suffix: "+" },
  { icon: Star, value: 4.9, label: "Average Rating", prefix: "", suffix: "★" },
  { icon: TrendingUp, value: 98, label: "Satisfaction Rate", suffix: "%" },
  { icon: Shield, value: 100, label: "Secure Transactions", suffix: "%" },
];

// Trip Images - s1.png to s16.png
const tripImages = [
  "/trip/s1.png",
  "/trip/s2.png",
  "/trip/s3.png",
  "/trip/s4.png",
  "/trip/s5.png",
  "/trip/s6.png",
  "/trip/s7.png",
  "/trip/s8.png",
  "/trip/s9.png",
  "/trip/s10.png",
  "/trip/s11.png",
  "/trip/s12.png",
  "/trip/s13.png",
  "/trip/s14.png",
  "/trip/s15.png",
  "/trip/s16.png",
  "/trip/s17.png",
];

// Floating images for background
const floatingImages: string[] = [
  "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=200&h=200&fit=crop",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=200&h=200&fit=crop",
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  const travelServices = services.filter(s => s.category === "Travel");
  const realEstateServices = services.filter(s => s.category === "Real Estate");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section
      id="services"
      className="py-12 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden w-full"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Floating Images */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="absolute opacity-[0.03]"
            initial={{ y: 0, rotate: 0 }}
            animate={{
              y: [0, -20, 0, 20, 0],
              rotate: [0, 5, -5, 3, 0],
            }}
            transition={{
              duration: 20 + idx * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${15 + idx * 30}%`,
              top: `${10 + idx * 25}%`,
              width: `${150 + idx * 50}px`,
              height: `${150 + idx * 50}px`,
            }}
          >
            <Image
              src={img}
              alt="Floating background"
              width={200}
              height={200}
              className="rounded-full object-cover"
              unoptimized
            />
          </motion.div>
        ))}
      </div>

      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          {/* Sri Durga Groups Branding */}
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-purple-300 text-[10px] md:text-sm font-semibold relative overflow-hidden group cursor-pointer backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center gap-1.5 md:gap-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="tracking-wider">SRI DURGA GROUPS</span>
              <span className="text-purple-400">✦</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Sri Durga
            </span>
            <span className="text-white"> Travel & Real Estate</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-2 md:mt-3 text-xs sm:text-sm text-gray-400 max-w-3xl mx-auto px-2"
          >
            Experience premium travel services and professional real estate solutions
            with Sri Durga Groups. Your trusted partner since 2008.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "6rem" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-0.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 mx-auto mt-3 md:mt-4 rounded-full"
          />
        </motion.div>

        {/* Animated Stats Counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3 lg:gap-4 mb-6 md:mb-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-2 md:p-4 text-center border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <Icon className="w-4 h-4 md:w-5 md:h-6 text-blue-400 mx-auto mb-1 md:mb-2" />
                <div className="text-sm md:text-xl lg:text-2xl font-bold text-white">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix || ""} duration={2} />
                </div>
                <p className="text-[8px] md:text-[10px] lg:text-xs text-gray-400 mt-0.5 md:mt-1">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-2 md:gap-4 mb-6 md:mb-8 flex-wrap"
        >
          <span className="px-3 md:px-5 py-1 md:py-2 bg-blue-500/20 text-blue-300 rounded-full text-[9px] md:text-xs font-semibold flex items-center gap-1.5 md:gap-2 border border-blue-500/30 backdrop-blur-sm">
            <Car className="w-3 h-3 md:w-4 md:h-4" />
            Travel Services
          </span>
          <span className="px-3 md:px-5 py-1 md:py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-[9px] md:text-xs font-semibold flex items-center gap-1.5 md:gap-2 border border-emerald-500/30 backdrop-blur-sm">
            <Building2 className="w-3 h-3 md:w-4 md:h-4" />
            Real Estate Services
          </span>
        </motion.div>

        {/* Travel Services - 1 col mobile, 2 col desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="w-full"
        >
          <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3 px-1">
            <div className="w-1 h-5 md:h-8 bg-gradient-to-b from-blue-400 to-cyan-400 rounded-full"></div>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-sm md:text-xl">
              Travel Services
            </span>
            <span className="text-gray-500 text-[8px] md:text-sm font-normal ml-1 md:ml-2">
              Ride with comfort & style
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 mb-6 md:mb-8 w-full">
            {travelServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.8 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-card group relative bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full" style={{ width: '150%' }} />
                  
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-32 sm:h-28 md:h-32 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className={`absolute top-2 right-2 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${service.bgColor} backdrop-blur-sm border border-white/10`}>
                        <Icon className={`w-3 h-3 md:w-4 md:h-4 ${service.iconColor}`} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-lg font-semibold text-white mb-0.5 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[10px] md:text-sm text-gray-400 leading-relaxed mb-1.5 md:mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-white/5 rounded-full text-gray-400 border border-white/5">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Real Estate Services - 1 col mobile, 2 col desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="w-full"
        >
          <h3 className="text-base md:text-xl font-bold text-white mb-3 md:mb-4 flex items-center gap-2 md:gap-3 px-1">
            <div className="w-1 h-5 md:h-8 bg-gradient-to-b from-emerald-400 to-teal-400 rounded-full"></div>
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent text-sm md:text-xl">
              Real Estate Services
            </span>
            <span className="text-gray-500 text-[8px] md:text-sm font-normal ml-1 md:ml-2">
              Find your dream property
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 w-full">
            {realEstateServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.05 + 1.5 }}
                  whileHover={{ 
                    y: -4,
                    transition: { duration: 0.3 }
                  }}
                  className="glass-card group relative bg-white/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-5 border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden w-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 transition-all duration-700 group-hover:translate-x-full" style={{ width: '150%' }} />
                  
                  <div className="flex flex-col sm:flex-row gap-2 md:gap-4">
                    <div className="relative w-full sm:w-32 md:w-40 lg:w-48 h-32 sm:h-28 md:h-32 rounded-lg md:rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className={`absolute top-2 right-2 px-1.5 md:px-2 py-0.5 md:py-1 rounded-full ${service.bgColor} backdrop-blur-sm border border-white/10`}>
                        <Icon className={`w-3 h-3 md:w-4 md:h-4 ${service.iconColor}`} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-lg font-semibold text-white mb-0.5 md:mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-[10px] md:text-sm text-gray-400 leading-relaxed mb-1.5 md:mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1 md:gap-1.5">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-[8px] md:text-[10px] px-1.5 md:px-2 py-0.5 bg-white/5 rounded-full text-gray-400 border border-white/5">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 24/7 Service & Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.5 }}
          className="mt-5 md:mt-8 w-full"
        >
          <div className="glass-card bg-gradient-to-r from-blue-600/10 to-cyan-600/10 backdrop-blur-lg rounded-xl md:rounded-2xl p-2.5 md:p-5 border border-blue-500/20 w-full">
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-6">
              <div className="flex items-center gap-1 md:gap-2 text-gray-300">
                <Clock className="w-3 h-3 md:w-5 md:h-5 text-blue-400" />
                <span className="text-[8px] md:text-sm font-medium">24/7 Service</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-300">
                <CreditCard className="w-3 h-3 md:w-5 md:h-5 text-emerald-400" />
                <span className="text-[8px] md:text-sm font-medium">Multiple Payments</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-300">
                <ShoppingBag className="w-3 h-3 md:w-5 md:h-5 text-purple-400" />
                <span className="text-[8px] md:text-sm font-medium">Cash & Carry</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-300">
                <Headphones className="w-3 h-3 md:w-5 md:h-5 text-orange-400" />
                <span className="text-[8px] md:text-sm font-medium">24/7 Support</span>
              </div>
              <div className="flex items-center gap-1 md:gap-2 text-gray-300">
                <Wifi className="w-3 h-3 md:w-5 md:h-5 text-cyan-400" />
                <span className="text-[8px] md:text-sm font-medium">Free WiFi</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ============================================ */}
        {/* TRIP IMAGES - 2 COL DESKTOP, 1 COL MOBILE */}
        {/* ============================================ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="mt-5 md:mt-8 w-full"
        >
          <div className="glass-card bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-emerald-600/5 backdrop-blur-lg rounded-xl md:rounded-2xl p-3 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden w-full">
            
            {/* Animated Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            
            {/* Header */}
            <div className="flex items-center justify-center gap-1.5 md:gap-3 mb-3 md:mb-5 flex-wrap">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Compass className="w-4 h-4 md:w-6 md:h-6 text-blue-400" />
              </motion.div>
              <h3 className="text-sm md:text-xl font-bold text-white flex items-center gap-1 md:gap-2">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                  Our Trip Gallery
                </span>
              </h3>
              <span className="text-[8px] md:text-xs text-emerald-400/60 bg-emerald-500/10 px-1.5 md:px-3 py-0.5 md:py-1 rounded-full border border-emerald-500/20">
                {tripImages.length} Photos
              </span>
            </div>

            {/* Trip Images Grid - 1 col mobile, 2 col desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full">
              {tripImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ 
                    delay: 2.1 + idx * 0.025, 
                    duration: 0.35,
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl overflow-hidden border border-white/10 hover:border-blue-500/40 transition-all duration-300 cursor-default w-full aspect-[4/3]"
                >
                  <Image
                    src={image}
                    alt={`Trip photo ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Image Number Overlay */}
                  <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm rounded-md">
                    <span className="text-white text-[10px] font-medium">#{idx + 1}</span>
                  </div>
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>

            {/* Animated Border Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "70%" } : {}}
              transition={{ delay: 2.2 + tripImages.length * 0.025, duration: 1 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent mx-auto mt-4 md:mt-6 rounded-full"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.8, duration: 0.5 }}
          className="mt-5 md:mt-8 text-center"
        >
          <p className="text-[10px] md:text-sm text-gray-400 mb-2 md:mb-4">
            Ready to experience premium service? Get in touch with us today!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3">
            <button className="px-3 md:px-8 py-1.5 md:py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg md:rounded-xl font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-[10px] md:text-sm hover:scale-105">
              Contact Our Team
            </button>
            <button className="px-3 md:px-8 py-1.5 md:py-3 bg-white/5 backdrop-blur-sm text-white rounded-lg md:rounded-xl font-semibold border border-white/10 hover:border-white/20 transition-all duration-300 text-[10px] md:text-sm hover:scale-105">
              <span className="flex items-center gap-1 md:gap-2">
                <Smartphone className="w-3 h-3 md:w-4 md:h-4" />
                99808 07508
              </span>
            </button>
          </div>
          <p className="text-[8px] md:text-xs text-gray-500 mt-1.5 md:mt-3">
            ✦ Trusted by 50,000+ customers across India ✦
          </p>
        </motion.div>
      </div>

      {/* CSS for glassmorphism */}
      <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.06);
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}