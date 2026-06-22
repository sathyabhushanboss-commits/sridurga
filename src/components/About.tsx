"use client";

import {
  Star,
  Quote,
  MapPin,
  PhoneCall,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";

const features = [
  {
    title: "Established Excellence",
    description: "Serving customers with trusted travel and real estate solutions for over two decades.",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    stat: "1998",
    statLabel: "Founded",
    lightColor: "amber",
  },
  {
    title: "Premium Fleet",
    description: "Well-maintained luxury vehicles equipped with modern amenities for a comfortable journey.",
    gradient: "from-blue-500 via-cyan-500 to-sky-500",
    stat: "50+",
    statLabel: "Vehicles",
    lightColor: "blue",
  },
  {
    title: "Elite Service",
    description: "White-glove service with professional, vetted drivers trained in hospitality.",
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    stat: "99%",
    statLabel: "Satisfaction",
    lightColor: "purple",
  },
  {
    title: "Property Experts",
    description: "Trusted guidance for property sales, purchases, rentals, and investment opportunities.",
    gradient: "from-emerald-500 via-teal-500 to-green-500",
    stat: "500+",
    statLabel: "Properties Assisted",
    lightColor: "emerald",
  },
];

const achievements = [
  { value: "25+", label: "Years of Excellence" },
  { value: "50,000+", label: "Trips Completed" },
  { value: "10,000+", label: "Happy Clients" },
  { value: "500+", label: "Properties Assisted" },
];

const services = [
  "Airport Transfers",
  "Outstation Trips",
  "Corporate Travel",
  "Holiday Packages",
  "Property Sales",
  "Property Purchase",
  "Property Rentals",
  "Commercial Leasing",
  "Investment Consulting",
  "Site & Land Sales",
];

const testimonials = [
  {
    name: "Rahal Rai K",
    review: "Quick trip and they provided excellent service with experienced drivers at an affordable cost.",
    rating: 5,
    location: "Bengaluru",
    role: "Business Traveler",
  },
  {
    name: "Arun Kumar",
    review: "Very professional service. The vehicle was clean, the driver arrived on time, and the entire journey was comfortable.",
    rating: 5,
    location: "Mysore",
    role: "Frequent Traveler",
  },
  {
    name: "Priya S",
    review: "Booked an airport transfer for my family. The service was reliable, punctual, and reasonably priced.",
    rating: 5,
    location: "Chennai",
    role: "Family Traveler",
  },
  {
    name: "Mahesh R",
    review: "Excellent outstation trip experience. Driver was courteous and the vehicle was well maintained.",
    rating: 5,
    location: "Hyderabad",
    role: "Corporate Client",
  },
  {
    name: "Sneha Gowda",
    review: "Highly recommended for local sightseeing and family trips. Smooth booking process and great support.",
    rating: 5,
    location: "Bengaluru",
    role: "Frequent Traveler",
  },
  {
    name: "Vikram Singh",
    review: "Best travel agency! Made our family trip unforgettable with excellent service.",
    rating: 5,
    location: "Delhi",
    role: "Family Traveler",
  },
  {
    name: "Rajesh K",
    review: "Excellent service and transparent communication for both travel and property requirements.",
    rating: 5,
    location: "Bengaluru",
    role: "Property Client",
  },
  {
    name: "Anita S",
    review: "Professional team with quick response and reliable support throughout the process.",
    rating: 5,
    location: "Bengaluru",
    role: "Business Owner",
  },
  {
    name: "Deepak M",
    review: "Highly recommended for travel bookings and property consultation in Bengaluru.",
    rating: 5,
    location: "Bengaluru",
    role: "Investor",
  },
];

// Animated Counter Component with proper types
function AnimatedCounter({ 
  value, 
  suffix = "", 
  duration = 2 
}: { 
  value: string; 
  suffix?: string; 
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (isNaN(end)) {
        setCount(Number(value));
        return;
      }
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// Feature Card Component with proper types
interface Feature {
  title: string;
  description: string;
  gradient: string;
  stat: string;
  statLabel: string;
  lightColor: string;
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  const lightGradients: Record<string, string> = {
    amber: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(245,158,11,0.4) 0%, rgba(245,158,11,0) 50%)`,
    blue: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0) 50%)`,
    purple: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 50%)`,
    emerald: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(16,185,129,0.4) 0%, rgba(16,185,129,0) 50%)`,
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer"
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: lightGradients[feature.lightColor] }}
      />
      
      <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
      
      <div className="relative">
        <div className={`w-20 h-20 mb-6 rounded-full bg-gradient-to-r ${feature.gradient} opacity-20 group-hover:opacity-40 transition-all duration-500 blur-2xl absolute -top-4 -left-4`} />
        
        <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}>
          <span className="text-2xl font-bold text-white">{index + 1}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-300">
          {feature.title}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6">{feature.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              {feature.stat}
            </div>
            <div className="text-sm text-slate-500">{feature.statLabel}</div>
          </div>
          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center`}>
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Achievement Card with proper types
interface Achievement {
  value: string;
  label: string;
}

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-700 transform -skew-x-12`} 
        style={{ 
          top: '-50%', 
          height: '200%', 
          width: '100%', 
          left: isHovered ? '100%' : '-100%', 
          transition: 'left 0.7s ease' 
        }} 
      />
      
      <div className="relative">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />
        <h3 className="relative text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          <AnimatedCounter value={achievement.value} />
        </h3>
      </div>
      <p className="mt-2 text-slate-600 font-medium relative">{achievement.label}</p>
      
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-300 ${isHovered ? 'w-24' : 'w-12'}`} />
    </motion.div>
  );
}

// Testimonial Card with proper types
interface Testimonial {
  name: string;
  review: string;
  rating: number;
  location: string;
  role: string;
}

function TestimonialCard({ 
  testimonial, 
  isHovered, 
  setIsHovered 
}: { 
  testimonial: Testimonial; 
  isHovered: boolean; 
  setIsHovered: (hovered: boolean) => void;
}) {
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-96 flex-shrink-0 bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group cursor-pointer overflow-hidden mx-3"
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 via-cyan-100 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-700`} />
      <div 
        className={`absolute -inset-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-all duration-1000 transform rotate-45 ${isHovered ? 'translate-x-full' : ''}`} 
        style={{ transition: 'transform 0.8s ease' }} 
      />
      
      <div className="absolute top-6 right-6 opacity-5">
        <Quote className="w-16 h-16 text-slate-400" />
      </div>
      
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-bold text-lg shadow-lg transition-all duration-300 ${isHovered ? 'scale-110' : ''}`}>
            {testimonial.name.charAt(0)}
          </div>
          <div className="ml-3">
            <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
            <p className="text-xs text-slate-500">{testimonial.role}</p>
            <div className="flex items-center gap-0.5 mt-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-slate-600 text-sm leading-relaxed italic">
          "{testimonial.review}"
        </p>
        
        <div className="mt-3 flex items-center gap-1 text-xs text-slate-400">
          <MapPin className="w-3 h-3" />
          <span>{testimonial.location}</span>
        </div>
      </div>
    </div>
  );
}

// Service Tag with proper types
function ServiceTag({ service, index }: { service: string; index: number }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      <div 
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 transition-all duration-500 ${isHovered ? 'translate-x-full' : '-translate-x-full'}`} 
        style={{ width: '150%' }} 
      />
      
      <span className="relative text-slate-700 group-hover:text-white transition-colors duration-300">
        {service}
      </span>
    </motion.div>
  );
}

// Marquee Testimonials Component - optimized with 2x duplication only
function MarqueeTestimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Duplicate testimonials twice for seamless infinite scroll (optimized for mobile)
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden py-8">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent z-10 pointer-events-none" />
      
      {/* Animated Marquee */}
      <motion.div
        animate={{
          x: [0, -1920],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex gap-4 w-max"
      >
        {scrollingTestimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            testimonial={testimonial}
            isHovered={hoveredIndex === index}
            setIsHovered={(hovered) => setHoveredIndex(hovered ? index : null)}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section ref={sectionRef} id="about" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Premium Background Lighting Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
        
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        />
        
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-sm font-semibold mb-6 relative overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="relative flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>Trusted Since 1998</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-7xl font-bold tracking-tight"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Trusted Solutions
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Since 1998
            </span>
          </motion.h2>

          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "8rem" } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mt-8 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Sri Durga Tours & Travels and Real Estate has been serving customers since 1998, 
            providing reliable travel services and professional property solutions across Bengaluru and Karnataka.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          style={{ opacity, scale }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {achievements.map((achievement, index) => (
            <AchievementCard key={index} achievement={achievement} index={index} />
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-sm font-semibold mb-6 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
              <span>Our Legacy</span>
            </div>
            
            <h3 className="text-4xl font-bold text-slate-900 mb-6">
              Your Trusted Partner Since 1998
            </h3>
            
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Sri Durga Tours & Travels and Real Estate has built a legacy of trust, 
                reliability, and excellence across two dynamic industries.
              </p>
              
              <p>
                From reliable travel services to professional real estate solutions, 
                we help individuals, families and businesses with transportation, 
                property sales, rentals and investment opportunities across Bengaluru and Karnataka.
              </p>
              
              <p>
                Our commitment to reliability, transparency and customer satisfaction 
                has made us a trusted name in Bengaluru. Whether you're planning a trip 
                or searching for the perfect property, we deliver exceptional experiences 
                backed by 25+ years of expertise.
              </p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold shadow-lg group cursor-pointer">
                    <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm text-slate-500">
                <span className="font-semibold text-slate-900">10,000+</span> happy clients
              </div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>
        </div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-24"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold mb-4 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span>Our Services</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900">Travel & Real Estate Solutions</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Comprehensive services tailored to your transportation and property needs
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {services.map((service, index) => (
              <ServiceTag key={index} service={service} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section with Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-700 text-sm font-semibold mb-4 relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Client Love</span>
            </div>
            <h3 className="text-4xl font-bold text-slate-900">What Our Clients Say</h3>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              Real experiences from travelers and property clients who trusted us
            </p>
          </div>

          {/* Single Row Marquee */}
          <MarqueeTestimonials />
        </motion.div>

        {/* CTA Banner with Lighting Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-24 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 rounded-3xl p-12 text-center relative overflow-hidden group cursor-pointer"
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 animate-shimmer" 
            style={{ backgroundSize: '200% 100%' }}
          />
          
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-ping" />
          <div className="absolute bottom-10 right-10 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          <div className="relative z-10">
            <h4 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Travel or Invest?
            </h4>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're planning a trip or looking for the right property, our team is ready to assist you.
            </p>
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <PhoneCall className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Contact Us Today</span>
            </button>
          </div>
          
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </section>
  );
}