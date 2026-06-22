
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
      "Buy and sell residential apartments, villas, plots, commercial properties, and investment properties across Bengaluru.",
  },
  {
    icon: KeyRound,
    title: "Property Rental",
    description:
      "Verified rental homes, apartments, villas, office spaces, and commercial properties at competitive prices.",
  },
  {
    icon: BadgeDollarSign,
    title: "Property Lease",
    description:
      "Long-term residential and commercial leasing solutions for individuals, businesses, and investors.",
  },
  {
    icon: Home,
    title: "Apartments & Villas",
    description:
      "Premium apartments, luxury villas, independent houses, and gated community properties.",
  },
  {
    icon: Landmark,
    title: "Commercial Properties",
    description:
      "Office spaces, retail outlets, warehouses, industrial properties, and commercial buildings.",
  },
  {
    icon: MapPinned,
    title: "Sites & Land Sales",
    description:
      "Residential plots, commercial sites, investment lands, and development opportunities in Bengaluru.",
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
            Real Estate Services
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Property Sale, Rent & Lease Services in Bengaluru
          </h2>

          <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-8">
            Sri Durga Groups provides professional real estate services
            including property sales, rentals, leasing, investment
            consultation, site sales, residential properties, commercial
            spaces, apartments, villas, and land acquisition opportunities
            across Bengaluru and Karnataka.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

        {/* SEO Content */}
        <div className="mt-20 bg-slate-50 rounded-3xl p-10">

          <h3 className="text-3xl font-bold text-slate-900 mb-6">
            Why Choose Sri Durga Groups for Real Estate Services?
          </h3>

          <p className="text-slate-600 leading-8 mb-6">
            With years of experience in the Bengaluru real estate market,
            Sri Durga Groups assists clients in buying, selling, renting,
            and leasing residential and commercial properties. Our team
            helps customers identify the right investment opportunities
            while ensuring transparent transactions and professional guidance.
          </p>

          <p className="text-slate-600 leading-8">
            Whether you are looking for apartments, villas, independent
            houses, plots, commercial properties, office spaces, warehouses,
            or investment lands, we provide end-to-end support to help you
            make informed real estate decisions.
          </p>

        </div>

      </div>
    </section>
  );
}

