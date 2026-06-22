import {
  Building2,
  KeyRound,
  BadgeDollarSign,
  MapPinned,
  Home,
  Landmark,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Property Sale",
    description:
      "Residential and commercial property buying and selling services.",
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
    icon: Home,
    title: "Apartments & Villas",
    description:
      "Premium apartments, villas, and independent houses.",
  },
  {
    icon: Landmark,
    title: "Commercial Properties",
    description:
      "Office spaces, retail shops, warehouses, and commercial buildings.",
  },
  {
    icon: MapPinned,
    title: "Sites & Land Sales",
    description:
      "Residential plots, investment sites, and commercial land opportunities.",
  },
];

export default function RealEstateSection() {
  return (
    <section
      id="real-estate"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Real Estate
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Property Sale, Rent & Lease Services
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Professional real estate solutions for residential,
            commercial, rental, leasing, and investment properties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition"
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