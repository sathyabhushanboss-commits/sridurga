import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-2xl font-bold">
              Sri Durga Tours And Travels
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Trusted travel partner since 1998 providing reliable,
              comfortable, and cost-effective travel solutions across
              Bengaluru and Karnataka.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#fleet">Fleet</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">
              Contact Information
            </h4>

            <div className="space-y-4 text-slate-400">

              <div className="flex gap-3">
                <Phone size={18} />
                <span>+91 99808 07508</span>
              </div>

              <div className="flex gap-3">
                <Mail size={18} />
                <span>info@sridurgatravels.com</span>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
                <span>
                  537, Adugodi Main Road,
                  Koramangala 8th Block,
                  Bengaluru - 560095
                </span>
              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">
          © {new Date().getFullYear()} Sri Durga Tours And Travels.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}