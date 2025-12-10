"use client";
import { motion } from "framer-motion";
import { Plane, Building2, MapPin, Compass, Clock, Phone } from "lucide-react";

export default function TourPackages() {
  const tours = [
    // {
    //   route: "Delhi - Ayodhya - Prayagraj - Banaras",
    //   title: "Ramayana Trail (Live)",
    //   duration: "14D/13N",
    //   image: "/travel/ganga.webp",
    //   offer: "Booking Open!",
    //   slug: "delhi-ayodhya-varanasi-tour"
    // },
    {
      route: "Chennai / Kerala",
      title: "South India Tour Package",
      duration: "7D/6N",
      image: "/travel/south.jpg",
      offer: "Call For Booking",
      slug: "soul-calming-encounters-in-kerala"
    },
    {
      route: "Delhi → Jaipur → Jaisalmer",
      title: "Majestic Rajasthan",
      duration: "4D/3N",
      image: "/travel/rajasthan.jpg",
      offer: "Booking Closed",
      slug: "delhi-jaipur-jaisalmer-heritage-tour"
    },
    {
      route: "Delhi → Pondicherry",
      title: "Pondicherry Tour",
      duration: "4D/5N",
      image: "/travel/Pondicherry.webp",
      offer: "Booking Closed",
      slug: "pondicherry-itinerary"
    },
    {
      route: "Delhi → Goa",
      title: "Magical Goa Tour",
      duration: "4N/5D",
      image: "/travel/goa.webp",
      offer: "Booking Closed",
      slug: "magical-goa"
    },
    // {
    //   route: "Delhi → Meghalaya",
    //   title: "Meghalaya Tour",
    //   duration: "5D/4N",
    //   image: "/travel/meghalaya.jfif",
    //   offer: "Booking Closed",
    //   slug: "meghalaya-4-days-5-nights"
    // },
  ];

  return (
    <section className="px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white rounded-md overflow-hidden border border-slate-200 flex flex-col hover:shadow-lg hover:border-slate-300 transition-all duration-300"
          >
            {/* Image Section */}
            <div className="relative h-46 overflow-hidden group">
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Duration Badge */}
              <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-sm">
                <Clock className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-semibold text-slate-700">{tour.duration}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 flex flex-col p-4">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-wide text-slate-500 font-medium mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {tour.route}
                </p>
                <h3 className="text-left text-md font-semibold text-slate-900 leading-tight mb-2">
                  {tour.title}
                </h3>

                {/* Amenities Icons */}
                <div className="flex items-center gap-4 pb-2">
                  <div className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition">
                    <Compass className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={`/services/travel/${tour.slug}`}
                  className="flex-1 text-sm text-white font-medium bg-slate-800 border border-zinc-300 py-2 rounded-sm text-center transition-all duration-300"
                >
                  View Details
                </a>
                <a
                  href="tel:18002028704"
                  className="flex items-center justify-center gap-2 px-4 py-2 rounded-sm text-sm font-medium text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all duration-300 hover:shadow-md"
                  title="Call us"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}