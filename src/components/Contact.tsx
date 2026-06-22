"use client";

import {
  Phone,
  MapPin,
  MessageCircle,
  Clock3,
  Send,
  Building2,
  Car,
  Home,
  Mail,
  Globe,
  Calendar,
  Users,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 bg-slate-950 text-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-12">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Get In Touch
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            <span className="text-cyan-400">Sri Durga</span> Groups
          </h1>

          <p className="mt-4 text-xl text-slate-300 font-semibold">
            Tours & Travels | Real Estate
          </p>

          <div className="mt-3 h-0.5 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />

          <p className="mt-6 text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Connect with <span className="text-white font-medium">Sri Durga Groups</span> for premium 
            <span className="text-blue-400"> travel services</span> and trusted 
            <span className="text-emerald-400"> real estate solutions</span> across Bengaluru and Karnataka. 
            Whether you need airport transfers, outstation trips, property sales, rentals, or leasing, 
            our expert team is here to assist you 7 days a week.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side - Contact Information */}
          <div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-semibold">
                  Sri Durga Groups
                </h2>
              </div>

              <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                Your trusted partner for <span className="text-white">tours & travels</span> and 
                <span className="text-white"> real estate</span> services in Bengaluru since 1998.
              </p>

              <div className="space-y-6">

                {/* Phone */}
                <div className="flex gap-4 group">
                  <div className="p-2.5 bg-blue-500/10 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                    <Phone className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300">
                      Call Us - Tours & Travels
                    </h4>
                    <a
                      href="tel:+919980807508"
                      className="text-slate-400 hover:text-white transition-colors text-lg font-semibold block"
                    >
                      +91 99808 07508
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Available 9 AM - 9 PM (All Days)
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4 group">
                  <div className="p-2.5 bg-green-500/10 rounded-xl group-hover:bg-green-500/20 transition-colors">
                    <MessageCircle className="text-green-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/919980807508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors text-lg font-semibold block"
                    >
                      Chat with Us
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">
                      Quick response on WhatsApp
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 group">
                  <div className="p-2.5 bg-purple-500/10 rounded-xl group-hover:bg-purple-500/20 transition-colors">
                    <Mail className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300">
                      Email Us
                    </h4>
                    <a
                      href="mailto:info@sridurgagroups.com"
                      className="text-slate-400 hover:text-white transition-colors text-lg font-semibold block"
                    >
                      info@sridurgagroups.com
                    </a>
                    <p className="text-slate-500 text-xs mt-0.5">
                      For general enquiries
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 group">
                  <div className="p-2.5 bg-red-500/10 rounded-xl group-hover:bg-red-500/20 transition-colors">
                    <MapPin className="text-red-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300">
                      Office Address
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      537, Adugodi Main Road,
                      <br />
                      Near Yashila, Koramangala 8th Block,
                      <br />
                      Bengaluru - 560095, Karnataka
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Landmark: Near Yashila Junction
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4 group">
                  <div className="p-2.5 bg-yellow-500/10 rounded-xl group-hover:bg-yellow-500/20 transition-colors">
                    <Clock3 className="text-yellow-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-300">
                      Working Hours
                    </h4>
                    <p className="text-white font-medium text-lg">
                      9:00 AM - 9:00 PM
                    </p>
                    <p className="text-slate-400 text-sm">
                      Monday to Sunday (All Days Open)
                    </p>
                    <p className="text-slate-500 text-xs mt-1">
                      Bookings & Enquiries welcome 24/7 via WhatsApp
                    </p>
                  </div>
                </div>

              </div>

              {/* Quick Service Links */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <h4 className="text-sm font-medium text-slate-300 mb-3">
                  Our Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Car className="w-3 h-3 text-blue-400" />
                    Airport Transfers
                  </span>
                  <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Car className="w-3 h-3 text-cyan-400" />
                    Outstation Trips
                  </span>
                  <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Home className="w-3 h-3 text-emerald-400" />
                    Property Rentals
                  </span>
                  <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Building2 className="w-3 h-3 text-violet-400" />
                    Property Sales
                  </span>
                  <span className="px-3 py-1.5 bg-slate-800 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-purple-400" />
                    Holiday Packages
                  </span>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                <div className="text-center">
                  <p className="text-cyan-400 font-bold text-lg">25+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Years of Trust</p>
                </div>
                <div className="text-center">
                  <p className="text-blue-400 font-bold text-lg">10K+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-emerald-400 font-bold text-lg">500+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Properties</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">

              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Quick Enquiry
                </h2>
              </div>

              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Fill in the details below and our team will get back to you within 30 minutes. 
                We provide expert assistance for <strong className="text-blue-600">Tours & Travels</strong> and 
                <strong className="text-emerald-600"> Real Estate</strong> requirements.
              </p>

              <form className="space-y-4">

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm appearance-none bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="airport-transfer">Airport Transfer</option>
                    <option value="outstation-trip">Outstation Trip</option>
                    <option value="corporate-travel">Corporate Travel</option>
                    <option value="holiday-package">Holiday Package</option>
                    <option value="tempo-traveller">Tempo Traveller Rental</option>
                    <option value="property-rental">Property Rental</option>
                    <option value="property-sale">Property Sale</option>
                    <option value="property-lease">Property Lease</option>
                    <option value="land-sale">Site & Land Sale</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Pickup / Location
                    </label>
                    <input
                      type="text"
                      placeholder="Enter location"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1.5">
                      Destination (if travel)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter destination"
                      className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1.5">
                    Travel / Property Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your travel or property requirement..."
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 transition-colors resize-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] text-base shadow-lg"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>

                <p className="text-center text-xs text-slate-400 mt-2">
                  We respect your privacy. Your details are secure with us.
                </p>

              </form>

            </div>

          </div>

        </div>

        {/* Map Section */}
        <div className="mt-12 rounded-2xl overflow-hidden border border-slate-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.704328656022!2d77.606275!3d12.934855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae167aab2dbd1b%3A0xf6a4b9c3e1f9b8f7!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Durga Groups Office Location - Koramangala, Bengaluru"
            className="filter grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-800">
            <p className="text-white text-xs flex items-center gap-2">
              <MapPin className="w-3 h-3 text-red-400" />
              Koramangala 8th Block, Bengaluru
            </p>
          </div>
        </div>

      </div>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Sri Durga Groups",
            "alternateName": "Sri Durga Tours and Travels & Sri Durga Real Estate",
            "description": "Sri Durga Groups provides premium tours and travels services and comprehensive real estate solutions including rental, lease, and sale properties in Bengaluru, Karnataka.",
            "image": "https://sridurgagroups.com/logo.png",
            "telephone": "+919980807508",
            "email": "info@sridurgagroups.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "537, Adugodi Main Road, Near Yashila, Koramangala 8th Block",
              "addressLocality": "Bengaluru",
              "addressRegion": "Karnataka",
              "postalCode": "560095",
              "addressCountry": "India"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 12.934855,
              "longitude": 77.606275
            },
            "openingHours": "Mo-Su 09:00-21:00",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "21:00"
              }
            ],
            "priceRange": "₹₹",
            "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "UPI", "Bank Transfer"],
            "currenciesAccepted": "INR",
            "areaServed": {
              "@type": "City",
              "name": "Bengaluru"
            },
            "hasMap": "https://maps.google.com/maps?q=Koramangala+Bengaluru",
            "sameAs": [
              "https://www.facebook.com/sridurgagroups",
              "https://www.instagram.com/sridurgagroups"
            ],
            "department": [
              {
                "@type": "TravelAgency",
                "name": "Sri Durga Tours and Travels",
                "description": "Premium tours and travels services including airport transfers, outstation trips, corporate travel, tempo traveller rentals, and holiday packages.",
                "serviceType": [
                  "Airport Transfers",
                  "Outstation Trips",
                  "Corporate Travel",
                  "Tempo Traveller Rental",
                  "Holiday Packages",
                  "Sightseeing Tours",
                  "Cab Rentals"
                ]
              },
              {
                "@type": "RealEstateAgent",
                "name": "Sri Durga Real Estate",
                "description": "Comprehensive real estate solutions including property rental, leasing, and sales in Bengaluru.",
                "serviceType": [
                  "Property Rental",
                  "Property Leasing",
                  "Property Sale",
                  "Commercial Leasing",
                  "Site & Land Sales",
                  "Property Investment Consulting"
                ]
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919980807508",
              "contactType": "Customer Service",
              "availableLanguage": ["English", "Kannada", "Hindi"],
              "hoursAvailable": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "09:00",
                "closes": "21:00"
              }
            }
          })
        }}
      />

    </section>
  );
}