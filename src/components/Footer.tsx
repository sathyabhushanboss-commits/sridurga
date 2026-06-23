import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              Sri Durga Groups
            </h2>

            <p className="mt-2 text-blue-400 font-medium">
              Tours & Travels | Real Estate
            </p>

            <p className="mt-4 text-slate-400 leading-7">
              Trusted travel and real estate partner since 1998,
              providing reliable transportation, property sales,
              rentals, leasing, and investment solutions across
              Bengaluru and Karnataka.
            </p>

            <p className="mt-4 text-slate-400 leading-7">
              We specialize in airport transfers, outstation trips,
              corporate travel, holiday packages, property sales,
              property rentals, commercial leasing, residential plots,
              and real estate investment consulting.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-white transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="hover:text-white transition"
                >
                  Travel Services
                </a>
              </li>

              <li>
                <a
                  href="#real-estate"
                  className="hover:text-white transition"
                >
                  Real Estate Services
                </a>
              </li>

              <li>
                <a
                  href="#fleet"
                  className="hover:text-white transition"
                >
                  Vehicle Fleet
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-white transition"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-slate-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <div className="flex flex-col">
                  <span>+91 99808 07508</span>
                  <span>+91 99805 67508</span>
                  <span>+91 94482 25920</span>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <div className="flex flex-col">
                  <span>sdtt.koramangala@gmail.com</span>
                  <span>sridurgatravels.koramangala@gmail.com</span>
                  <span>sridurgarelators@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  537, Adugodi Main Road,
                  Near Yashila,
                  Koramangala 8th Block,
                  Bengaluru,
                  Karnataka 560095
                </span>
              </div>

            </div>

            <div className="mt-6">
              <a
                href="https://wa.me/919980807508"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-lg text-white font-medium"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        {/* SEO Keywords */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-sm text-slate-500 text-center leading-7">
            Travel Agency in Bengaluru | Tours and Travels in Koramangala |
            Airport Pickup and Drop Services | Outstation Taxi Services |
            Tempo Traveller Rental | Property Sale in Bengaluru |
            Property Rental Services | Commercial Property Leasing |
            Residential Plots | Real Estate Consultants in Bengaluru |
            Investment Property Services | Sri Durga Groups
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">

          <p className="text-slate-500">
            © {new Date().getFullYear()} Sri Durga Groups.
            All Rights Reserved.
          </p>

          <p className="mt-3 text-sm text-slate-400">
            Designed, Developed and Maintained by{" "}
            <span className="font-semibold text-white">
              Sathya Enterprises
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}