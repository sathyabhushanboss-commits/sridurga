"use client";

import {
  Phone,
  MapPin,
  MessageCircle,
  Clock3,
  Send,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-400 font-semibold uppercase tracking-widest">
            Contact Us
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Book Your Journey With Confidence
          </h2>

          <p className="mt-6 text-slate-400 max-w-2xl mx-auto">
            Get in touch with Sri Durga Tours And Travels for airport transfers,
            outstation trips, local sightseeing, corporate travel, and holiday packages.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}
          <div>

            <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">

              <h3 className="text-2xl font-semibold mb-8">
                Sri Durga Tours And Travels
              </h3>

              <div className="space-y-8">

                <div className="flex gap-4">
                  <Phone className="text-blue-400 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold">
                      Call Us
                    </h4>
                    <a
                      href="tel:+919980807508"
                      className="text-slate-400 hover:text-white"
                    >
                      +91 99808 07508
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MessageCircle
                    className="text-green-400 mt-1"
                    size={22}
                  />
                  <div>
                    <h4 className="font-semibold">
                      WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/919980807508"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="text-red-400 mt-1" size={22} />
                  <div>
                    <h4 className="font-semibold">
                      Office Address
                    </h4>

                    <p className="text-slate-400">
                      537, Adugodi Main Road,
                      <br />
                      Near Yashila,
                      <br />
                      Koramangala 8th Block,
                      <br />
                      Bengaluru - 560095
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock3
                    className="text-yellow-400 mt-1"
                    size={22}
                  />
                  <div>
                    <h4 className="font-semibold">
                      Working Hours
                    </h4>

                    <p className="text-slate-400">
                      Available 24/7 for Bookings & Enquiries
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side Form */}
          <div>

            <div className="bg-white rounded-2xl p-8 text-slate-900">

              <h3 className="text-2xl font-semibold mb-6">
                Quick Enquiry
              </h3>

              <form className="space-y-5">

                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Pickup Location"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Destination"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <textarea
                    rows={5}
                    placeholder="Travel Requirement"
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
                >
                  <Send size={18} />
                  Send Enquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}