import {
  Plane,
  Car,
  Building2,
  KeyRound,
  BadgeDollarSign,
  MapPinned,
} from "lucide-react";

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Reliable airport pickup and drop services with punctual drivers.",
  },
  {
    icon: Car,
    title: "Outstation Trips",
    description:
      "Comfortable outstation travel for family, business, and leisure trips.",
  },
  {
    icon: Building2,
    title: "Property Sale",
    description:
      "Buy and sell residential and commercial properties with confidence.",
  },
  {
    icon: KeyRound,
    title: "Property Rental",
    description:
      "Verified rental homes, apartments, offices, and commercial spaces.",
  },
  {
    icon: BadgeDollarSign,
    title: "Property Lease",
    description:
      "Long-term leasing solutions for residential and commercial properties.",
  },
  {
    icon: MapPinned,
    title: "Site & Land Sales",
    description:
      "Residential plots, commercial sites, and investment land opportunities.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Travel & Real Estate Solutions
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            We provide reliable travel services and professional real estate
            solutions including property sales, rentals, leasing, and land investments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600 leading-7">
                  {service.description}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}