"use client";

import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Building2,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Travel Services", href: "#services" },
  { name: "Real Estate", href: "#real-estate" },
  { name: "Fleet", href: "#fleet" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Sri Durga"
              className="h-12 w-auto"
            />

            <div>
              <h1 className="font-bold text-lg text-slate-900">
                Sri Durga
              </h1>

              <p className="text-xs text-slate-500">
                Tours & Travels | Real Estate
              </p>
            </div>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-slate-700 hover:text-blue-600 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+919980807508"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919980807508"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="flex flex-col p-5 gap-5">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-medium text-slate-700"
              >
                {link.name}
              </a>
            ))}

            <a
              href="tel:+919980807508"
              className="flex items-center gap-2"
            >
              <Phone size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919980807508"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-600"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

          </div>
        </div>
      )}
    </header>
  );
}