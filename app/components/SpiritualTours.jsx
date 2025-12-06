"use client";
import { motion } from "framer-motion";
import { Plane, Building2, MapPin, Compass, Clock, Phone } from "lucide-react";

export default function SpiritualTours() {
  const tours = [
    {
        route: "Delhi - MP - Jyotirlinga",
        title: "Madhya Pradesh Jyotirlinga",
        duration: "4D/5N",
        image: "/travel/jyotirling-mp.jfif",
        offer: "Booking Closed",
        slug: "madhya-pradesh-jyotirlinga-spiritual-yatra-with-kalbharav-darshan"
      },
      {
        route: "Delhi - Maharashtra",
        title: "Maharashtra Jyotirlinga",
        duration: "6D/5N",
        image: "/travel/jyotirling-mh.jfif",
        offer: "Booking Closed",
        slug: "maharashtra-jyotirlinga-spiritual-pilgrimage-for-seniors"
      },
      {
        route: "Haridwar - Rishikesh - Neelkanth",
        title: "Haridwar, Rishikesh, Neelkanth",
        duration: "3D/2N",
        image: "/travel/rishikesh.jfif",
        offer: "Booking Closed",
        slug: "haridwar-rishikesh-and-neelkanth-mahadev"
      },
      {
        route: "Delhi → Rajasthan",
        title: "Khatu Shyam Ji",
        duration: "4D/5N",
        image: "/travel/khatu-shyam.jfif",
        offer: "Booking Closed",
        slug: "khatu-shyam-ji-mandir-itinerary"
      },
      {
        route: "Kailash Mansarovar",
        title: "Kailash Mansarovar - Helicopter",
        duration: "6D/5N",
        image: "/travel/kailash.jfif",
        offer: "Booking Closed",
        slug: "kailash-mansarovar-yatra-by-helicopter"
      },
      {
        route: "Delhi-Amritsar-Vaishno Devi",
        title: "Amritsar - Vaishno Devi",
        duration: "5D/4N",
        image: "/travel/amritsar.jfif",
        offer: "Booking Closed",
        slug: "golden-temple-amritsar-and-vaishno-devi-katra"
      }
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

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