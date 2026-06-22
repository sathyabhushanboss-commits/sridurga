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
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            Contact Us
          </h2>

          <p className="mt-4 text-slate-600">
            Get in touch for travel bookings and real estate enquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}
          <div className="space-y-8">

            <div className="bg-white p-8 rounded-2xl shadow">

              <div className="flex items-start gap-4 mb-6">
                <Phone className="text-blue-600" />
                <div>
                  <h3 className="font-semibold">
                    Phone
                  </h3>
                  <p>+91 99808 07508</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <MessageCircle className="text-green-600" />
                <div>
                  <h3 className="font-semibold">
                    WhatsApp
                  </h3>
                  <p>+91 99808 07508</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <MapPin className="text-red-600" />
                <div>
                  <h3 className="font-semibold">
                    Address
                  </h3>
                  <p>
                    537, Adugodi Main Road,
                    Koramangala 8th Block,
                    Bengaluru - 560095
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock3 className="text-yellow-600" />
                <div>
                  <h3 className="font-semibold">
                    Working Hours
                  </h3>
                  <p>24/7 Support</p>
                </div>
              </div>

            </div>

          </div>

          {/* Right */}
          <ContactForm />

        </div>

      </div>
    </section>
  );
}