"use client";
import { motion } from "framer-motion";
import { Plane, Building2, MapPin, Compass } from "lucide-react";
import { useState, useRef } from "react";
import BookingModal from "./BookingModal";

export default function TourPackages() {
  const tours = [
    {
      route: "Agra – Jaipur – Delhi",
      title: "Golden Triangle Tour Package",
      duration: "8D/7N",
      image: "/travel/agra.jpeg",
    },
    {
      route: "Delhi → Jaipur → Jaisalmer",
      title: "Majestic Rajasthan with Delhi Tour Package",
      duration: "18D/17N",
      image: "/travel/rajasthan.jpg",
    },
    {
      route: "Nepal – Delhi",
      title: "Buddhist Circuit India Nepal Tour Package",
      duration: "10D/9N",
      image: "/travel/budh.jpg",
    },
    {
      route: "Delhi – Leh – Srinagar",
      title: "Mystical North Kashmir Ladakh Experience",
      duration: "8D/7N",
      image: "/travel/kashmir.jpg",
    },
    {
      route: "Sri Lanka",
      title: "Ramayana Trail India to Sri Lanka Experience",
      duration: "22D/21N",
      image: "/travel/other.jpg",
    },
    {
      route: "Chennai – Mahabalipuram",
      title: "South India Tour Package",
      duration: "8D/7N",
      image: "/travel/south.jpg",
    },
    {
      route: "Delhi – Ayodhya – Prayagraj",
      title: "Ramayana Trail A Sacred Journey Through India",
      duration: "14D/13N",
      image: "/travel/ganga.jfif",
    },
    {
      route: "Ayodhya → Nandigram → Prayagraj",
      title: "The Sacred Circuit From Ganga to Yamuna",
      duration: "12D/11N",
      image: "/travel/ayodhya.png",
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  const handleEnquireClick = (tour) => {
    setSelectedTour(tour.route);
    setIsModalOpen(true);
  };

  return (
    <section className="px-6">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {tours.map((tour, index) => (
          <motion.div
            key={index}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-zinc-200 flex flex-col hover:shadow-lg transition"
          >
            <div className="h-48 overflow-hidden">
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
                <p className="text-sm text-zinc-600 mb-4">{tour.duration}</p>

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
                <button
                  className="flex-1 bg-orange-800 text-white text-sm py-2 rounded-sm hover:bg-orange-700 transition"
                  onClick={() => handleEnquireClick(tour)}
                >
                  Enquire Now
                </button>
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
      <BookingModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourname={selectedTour}
      />
    </section>
  );
}
