import {
  Phone,
  MapPin,
  Clock3,
  MessageCircle,
} from "lucide-react";

import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Get In Touch
          </span>
          <h2 className="mt-2 sm:mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-sm sm:text-base">
            Get in touch for travel bookings and real estate enquiries.
          </p>
          <div className="mt-3 h-0.5 w-16 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">

          {/* Left - Contact Information */}
          <div className="space-y-6 sm:space-y-8">

            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">

              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="p-2.5 bg-blue-50 rounded-xl">
                  <Phone className="text-blue-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Phone
                  </h3>
                  <a href="tel:+919980807508" className="text-slate-600 hover:text-blue-600 transition-colors text-sm sm:text-base">
                    +91 99808 07508
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="p-2.5 bg-green-50 rounded-xl">
                  <MessageCircle className="text-green-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    WhatsApp
                  </h3>
                  <a 
                    href="https://wa.me/919980807508" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-green-600 transition-colors text-sm sm:text-base"
                  >
                    +91 99808 07508
                  </a>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Quick response on WhatsApp
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5 sm:mb-6">
                <div className="p-2.5 bg-red-50 rounded-xl">
                  <MapPin className="text-red-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Address
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    537, Adugodi Main Road,
                    <br />
                    Koramangala 8th Block,
                    <br />
                    Bengaluru - 560095
                  </p>
                  <p className="text-slate-400 text-xs mt-1">
                    Landmark: Near Yashila Junction
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-yellow-50 rounded-xl">
                  <Clock3 className="text-yellow-600 w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                    Working Hours
                  </h3>
                  <p className="text-slate-600 text-sm font-medium">
                    9:00 AM - 9:00 PM
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5">
                    Monday to Sunday (All Days Open)
                  </p>
                </div>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-cyan-600 font-bold text-xl">25+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Years of Trust</p>
                </div>
                <div>
                  <p className="text-blue-600 font-bold text-xl">10K+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Happy Clients</p>
                </div>
                <div>
                  <p className="text-emerald-600 font-bold text-xl">500+</p>
                  <p className="text-slate-500 text-[10px] uppercase tracking-wider">Properties</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right - Contact Form */}
          <ContactForm />

        </div>

      </div>
    </section>
  );
}