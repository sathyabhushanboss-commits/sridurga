"use client";

import {
  Award,
  Building2,
  Car,
  Users,
  Phone,
} from "lucide-react";

const testimonials = [
  {
    name: "Rahal Rai K",
    review:
      "Quick trip and they provide the best services with experienced drivers at affordable prices.",
  },
  {
    name: "Prakash Kumar",
    review:
      "Professional service, clean vehicles and friendly drivers.",
  },
  {
    name: "Sanjay R",
    review:
      "Excellent airport transfer service and on-time pickup.",
  },
  {
    name: "Vinay Gowda",
    review:
      "Very helpful in finding rental properties in Bengaluru.",
  },
  {
    name: "Ramesh Kumar",
    review:
      "Trustworthy team for property sales and documentation.",
  },
  {
    name: "Arun B",
    review:
      "Comfortable travel experience for our family trip.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
            About Sri Durga Groups
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Trusted Tours, Travels &
            <span className="text-blue-600">
              {" "}Real Estate Services
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-4xl mx-auto leading-8">
            Sri Durga Groups is a trusted name in Bengaluru providing
            Tours & Travels and Real Estate services since 1998.
            We specialize in airport transfers, outstation travel,
            holiday packages, property sales, rentals, leasing,
            investment opportunities and commercial property solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Award className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h3 className="text-4xl font-bold">25+</h3>
            <p className="text-slate-600 mt-2">Years Experience</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Users className="w-12 h-12 mx-auto text-green-600 mb-4" />
            <h3 className="text-4xl font-bold">1000+</h3>
            <p className="text-slate-600 mt-2">Happy Clients</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Car className="w-12 h-12 mx-auto text-orange-600 mb-4" />
            <h3 className="text-4xl font-bold">50000+</h3>
            <p className="text-slate-600 mt-2">Trips Completed</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <Building2 className="w-12 h-12 mx-auto text-purple-600 mb-4" />
            <h3 className="text-4xl font-bold">500+</h3>
            <p className="text-slate-600 mt-2">Properties Listed</p>
          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Why Choose Sri Durga Groups?
            </h3>

            <ul className="space-y-4 text-slate-600 leading-8">
              <li>✓ Trusted Since 1998</li>
              <li>✓ Airport Transfers & Outstation Travel</li>
              <li>✓ Tempo Traveller & Corporate Travel</li>
              <li>✓ Property Sale Services</li>
              <li>✓ Rental & Leasing Solutions</li>
              <li>✓ Residential & Commercial Properties</li>
              <li>✓ Transparent Pricing</li>
              <li>✓ Serving Bengaluru & Karnataka</li>
            </ul>

            <a
              href="tel:+919980807508"
              className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700"
            >
              <Phone size={20} />
              Contact Us
            </a>

          </div>

          <div className="space-y-6">

            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/sset1.jpeg"
                alt="Sri Durga Tours and Travels Bengaluru"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="/sset2.png"
                alt="Sri Durga Real Estate Bengaluru"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

          </div>

        </div>

        <div className="mt-24">

          <h3 className="text-3xl font-bold text-center mb-12">
            Customer Reviews
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <div className="text-yellow-500 text-xl mb-4">
                  ★★★★★
                </div>

                <p className="text-slate-600">
                  "{item.review}"
                </p>

                <h4 className="mt-6 font-bold">
                  {item.name}
                </h4>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}