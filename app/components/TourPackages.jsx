"use client";
import { motion } from "framer-motion";
import { Plane, Building2, MapPin, Compass } from "lucide-react";
import Link from "next/link";

export default function TourPackages() {
  const tours = [
    {
      route: "Delhi - Ayodhya - Prayagraj - Banaras",
      title: "Ramayana Trail",
      duration: "14D/13N",
      image: "/travel/ganga.jfif",
      offer: "Booking Open !",
      slug: "delhi-ayodhya-varanasi-tour"
    },
    {
      route: "Chennai / Kerala",
      title: "South India Tour Package",
      duration: "8D/7N",
      image: "/travel/south.jpg",
      offer: "Call For Booking",
      slug: "south-india-tour"
    },
    {
      route: "Delhi → Jaipur → Jaisalmer",
      title: "Majestic Rajasthan",
      duration: "18D/17N",
      image: "/travel/rajasthan.jpg",
      offer: "Booking Closed",
      slug: "rajasthan-tour"
    },
    {
      route: "Delhi → Goa",
      title: "Delhi - Goa Tour Package",
      duration: "4D/5N",
      image: "/travel/goa.webp",
      offer: "Booking Closed",
      slug: "goa-tour"
    }
  ];

  return (
    <section className="px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-zinc-200 flex flex-col hover:shadow-lg transition"
          >
            <div className="relative h-48 overflow-hidden">
              {/* 🏷️ Special Offer Tag */}
              <span
                className={`absolute top-0 right-0 z-10 
              ${tour.offer === "Booking Open !"
                    ? "bg-green-600/90 text-white" // Primary/Active Color
                    : tour.offer === "Booking Closed"
                      ? "bg-red-700/90 text-white" // Warning/Closed Color
                      : "bg-zinc-700/90 text-zinc-200" // Default/Call Color
                  } 
              text-[13px] font-bold uppercase px-4 py-1.5 
              rounded-bl-xl shadow-lg transform translate-y-0
            `}
              >
                {tour.offer}
              </span>
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="flex-1 flex flex-col justify-between p-5 text-left">
              <div>
                <p className="text-sm text-zinc-800 font-medium mb-1">
                  {tour.route}
                </p>
                <h3 className="text-lg font-semibold text-zinc-800 leading-snug mb-2">
                  {tour.title}
                </h3>

                {/* Icons Row */}
                <div className="flex items-center justify-start gap-5 border-t border-zinc-200 pt-4 pb-2">
                  <Plane className="w-5 h-5 text-zinc-600 hover:text-zinc-800 transition" />
                  <Building2 className="w-5 h-5 text-zinc-600 hover:text-zinc-800 transition" />
                  <Compass className="w-5 h-5 text-zinc-600 hover:text-zinc-800 transition" />
                  <MapPin className="w-5 h-5 text-zinc-600 hover:text-zinc-800 transition" />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-auto pt-2">
                <Link
                  href={tour.offer === "Booking Closed" || tour.offer === "Call For Booking" ? "#" : `/services/travel/${tour.slug}`}
                  className={`flex-1 text-sm py-2 rounded-sm text-center transition
    ${tour.offer === "Booking Closed" || tour.offer === "Call For Booking"
                      ? "bg-red-700/90 text-white cursor-not-allowed pointer-events-none"
                      : "bg-red-700/90 text-white hover:bg-orange-700"
                    }`}
                >
                  Get Details
                </Link>
                <a
                  href="tel:18002028704"
                  className="flex-1 text-sm py-2 rounded-sm text-zinc-800 border border-zinc-800 transition text-center"
                >
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
