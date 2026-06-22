import Image from "next/image";
import { Users, MessageCircle } from "lucide-react";

const vehicles = [
  {
    name: "Sedan",
    capacity: "4+1 Seater",
    image: "/fleet/sedan.jpg",
  },
  {
    name: "SUV",
    capacity: "6+1 Seater",
    image: "/fleet/suv.jpg",
  },
  {
    name: "Innova Crysta",
    capacity: "7+1 Seater",
    image: "/fleet/innova.jpg",
  },
  {
    name: "Tempo Traveller",
    capacity: "12/17 Seater",
    image: "/fleet/traveller.jpg",
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Fleet
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            Travel in Comfort & Style
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Well-maintained vehicles for airport transfers,
            corporate travel, sightseeing, and outstation trips.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  {vehicle.name}
                </h3>

                <div className="flex items-center gap-2 mt-3 text-slate-600">
                  <Users size={18} />
                  <span>{vehicle.capacity}</span>
                </div>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  className="mt-6 flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                >
                  <MessageCircle size={18} />
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}