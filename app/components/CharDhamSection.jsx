"use client";
import Image from "next/image";
import { Phone, ArrowRight, Award, Globe2, Headphones, Users, ShieldCheck } from "lucide-react";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BookingModal from "./BookingModal";

export default function CharDhamSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dhamRef = useRef(null);
  const dhamInView = useInView(dhamRef, { once: true, margin: "-60px" });

  const pkgRef = useRef(null);
  const pkgInView = useInView(pkgRef, { once: true, margin: "-60px" });

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });

  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const features = [
    {
      icon: <Award className="w-10 h-10 text-teal-900" />,
      title: "15+ Years of Excellence",
      desc: "With over a decade of experience, we have mastered the art of crafting unforgettable pilgrimages.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-teal-900" />,
      title: "50+ Destinations",
      desc: "From the holy peaks of Kedarnath to the tranquil banks of Badrinath.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-teal-900" />,
      title: "24×7 Customer Support",
      desc: "Our travel experts are always just a call away — before, during, and after your journey.",
    },
    {
      icon: <Users className="w-10 h-10 text-teal-900" />,
      title: "51,000+ Happy Customers",
      desc: "Thousands of pilgrims have trusted us to guide their Char Dham yatra.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-900" />,
      title: "100% Money Safe",
      desc: "Your trust and security matter most. We offer transparent bookings.",
    },
  ];

  const dhamHighlights = [
    {
      name: "Char Dham",
      image: "/travel/kedarnath.jpeg",
      desc: "A journey through the Himalayas that blends faith & nature",
    },
    {
      name: "Darjeeling",
      image: "/travel/darjeeling.jpeg",
      desc: "Wake up to misty mornings, rolling tea gardens, and the whisper of mountain air.",
    },
    {
      name: "Kerala",
      image: "/travel/kerala.jpeg",
      desc: "Sail through serene back waters, palm-lined horizons where time flows slower",
    },
    {
      name: "Goa",
      image: "/travel/goa.jpeg",
      desc: "Golden beaches, Portuguese charm, and nights that never lose their rhythm.",
    },
  ];

  const tourPackages = [
    {
      name: "Kedarnath Tour Package (Ek Dham Tour From Haridwar)",
      duration: "03 Nights / 04 Days",
      route: "Haridwar – Guptkashi – Kedarnath – Guptkashi – Haridwar",
      price: "Rs. 7500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Guptkashi",
        "01 Night Stay in Kedarnath Camp",
        "02 Breakfast & 02 Dinner",
        "All Toll Parking Tax",
      ],
      image: "/travel1.jpg",
    },
    {
      name: "Badrinath Tour Package (Ek Dham Tour From Haridwar)",
      duration: "03 Nights / 04 Days",
      route: "Haridwar – Rudraprayag – Badrinath – Haridwar",
      price: "Rs. 7500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night Stay in Badrinath Hotel",
        "03 Breakfast & 03 Dinner",
        "All Toll Parking Tax",
      ],
      image:
        "/travel/badri2.jpeg",
    },
    {
      name: "Kedarnath-Badrinath Tour (Do Dham Tour From Haridwar)",
      duration: "05 Nights / 06 Days",
      route: " Haridwar – Guptkashi – Kedarnath – Gouptkashi – Badrinath – Rudraprayag Haridwar",
      price: "Rs. 12500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night Stay in Badrinath Hotel",
        "03 Breakfast & 03 Dinner",
        "All Toll Parking Tax",
      ],
      image:
        "/travel/do-dham.jpeg",
    },
    {
      name: "Char Dham Tour Package",
      duration: "09 Nights / 10 Days",
      route: " Haridwar – Guptkashi – Kedarnath – Gouptkashi – Haridwar",
      price: "Rs. 17500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night Stay in Badrinath Hotel",
        "03 Breakfast & 03 Dinner",
        "All Toll Parking Tax",
      ],
      image:
        "/travel/chardham.jpeg",
    },
    {
      name: "Kedarnath Tour Package (Ek Dham Tour From Delhi)",
      duration: "04 Nights / 05 Days",
      route: " Haridwar – Guptkashi – Kedarnath – Guptkashi – Haridwar",
      price: "Rs. 9500/- Per Person (Starting Price)",
      inclusions: [
        "01 Night Hotel Accommodation in Rudraprayag",
        "02 Night Stay in Badrinath Hotel",
        "01 Night Stay In Kedarnath Camp",
        "03 Breakfast & 03 Dinner",
        "All Toll Parking Tax",
      ],
      image:
        "/travel/kedarnath.jpeg",
    },
    {
      name: "Badrinath Tour Package (Ek Dham Tour From Delhi)",
      duration: "04 Nights / 05 Days",
      route: "Haridwar – Rudraprayag – Badrinath – Haridwar",
      price: "Rs. 9500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Rudraprayag",
        "01 Night Stay in Badrinath Hotel",
        "03 Breakfast & 03 Dinner",
        "All Toll Parking Tax",
      ],
      image:
        "/travel/badri2.jpeg",
    },
    {
      name: "Char Dham Tour Package From Delhi",
      duration: "11 Nights / 12 Days",
      route: "Haridwar – Yamounotri – Gangotri – Kedarnath – Badrinath – Haridwar",
      price: "Rs. 19500/- Per Person (Starting Price)",
      inclusions: [
        "02 Night Hotel Accommodation in Haridwar",
        "02 Night Hotel Accommodation in Barkot",
        "02 Night Hotel Accommodation in Uttarkashi",
        "02 Night Hotel Accommodation in Gouptkashi",
      ],
      image:
        "/travel/chardham.jpeg",
    },
    {
      name: "Do Dham From Dehradun By Helicopter",
      duration: "03 Nights / 04 Days",
      route: "Dehradun – Kedarnath - Badrinath - Gangotri - Yamunotri",
      price: "Rs. 125000/- Per Person (Starting Price)",
      inclusions: [
        "Dehradun to Dehradun Helicopter",
        "All Local Transfer",
        "01 Night Hotel Accommadation",
        "Including Hotel Meal",
      ],
      image:
        "/travel/do-dham.jpeg",
    },
    {
      name: "Char Dham From Dehradun By Helicopter",
      duration: "04 Nights / 05 Days",
      route: "Dehradun – Char Dham",
      price: "Rs. 175000/- Per Person (Starting Price)",
      inclusions: [
        "Dehradun to Dehradun Helicopter",
        "All Local Transfer",
        "04 Night Hotel Accommadation",
        "Including Hotel Meal",
      ],
      image:
        "/travel/chardham.jpeg",
    }
    // ... (keep your tourPackages array same)
  ];

  return (
    <section className="text-zinc-800 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-3">
          Discover the many shades of India
        </h2>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600">
          From misty mountains to golden beaches - explore destinations that capture the spirit, color & charm of India&apos;s incredible diversity.
        </p>
      </div>

      {/* Dham Highlights */}
      <motion.div
        ref={dhamRef}
        variants={fadeUp}
        initial="hidden"
        animate={dhamInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 mb-16"
      >
        {dhamHighlights.map((dham, index) => (
          <div
            key={index}
            className="rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image src={dham.image} alt={dham.name} fill className="object-cover transform transition-transform duration-500 ease-in-out hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-800 mb-1">{dham.name}</h3>
              <p className="text-md text-zinc-600">{dham.desc}</p>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="text-center">
        <h2 className="text-zinc-800 text-3xl md:text-4xl font-bold mb-3">
          Tailored Journeys for Timeless Souls
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-zinc-600">
          Discover journeys crafted around your comfort, interests, and dreams. Share your preferences, and we&apos;ll design a personalized travel experience made just for you.
        </p>
      </div>
      <div className="py-8 md:mb-8 md:py-12 grid md:grid-cols-[40%_1fr] lg:grid-cols-[45%_1fr] xl:grid-cols-[50%_1fr] gap-8 md:gap-2">
        <div className="flex items-center justify-center">
          <img src="/mapp.png" alt="map" loading="lazy" decoding="async" width={340} height={420} />
        </div>
        <div className="flex flex-col">
          <div className="bg-white border-none w-[92%] md:w-full max-w-lg p-6 relative rounded-sm text-zinc-800">
            {/* Heading */}
            <h3 className="text-3xl md:text-2xl font-semibold text-zinc-800 mb-4 text-center">
              Plan Your Trip !
            </h3>
            {/* Form */}
            <form className="space-y-4 text-sm">
              {/* Row 1: Name + Contact */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                />
              </div>
              {/* Row 2: Date + Family Members */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="date"
                  placeholder="Preferred Date"
                  className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                />
                <input
                  type="text"
                  placeholder="Number of Travellers"
                  className="flex-1 border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600"
                />
              </div>
              {/* Row 3 */}
              <div className="flex flex-col gap-3">
              <textarea
                rows="3"
                placeholder="Describe Your Tour"
                className="w-full border border-zinc-300 rounded-sm px-3 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600 resize-none"
              ></textarea>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <select defaultValue="Select Destination"
                  className="flex-1 border border-zinc-300 rounded-sm px-2 py-2 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-zinc-600 bg-white cursor-pointer"                  
                >
                 <option value="Select Destination" disabled>
          Select Destination
        </option>
                  <option value="Char Dham">Char Dham</option>
                  <option value="Goa">Goa</option>
                  <option value="Darjeeling">Darjeeling</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Other">Other</option>
                </select>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 bg-orange-700 text-white px-8 py-2 rounded-sm shadow hover:bg-orange-800 transition"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Packages */}
      <div className="mb-6 md:mb-10 text-center">
        <h2 className="text-zinc-800 text-3xl md:text-4xl font-bold">
          Explore Our Pre-defined Packages <ArrowRight className="inline-block" size={28} />
        </h2>
      </div>

      <motion.div
        ref={pkgRef}
        variants={fadeUp}
        initial="hidden"
        animate={pkgInView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto space-y-9"
      >
        {tourPackages.map((pkg, index) => (
          <div
            key={index}
            className="grid md:grid-cols-2 bg-white rounded-sm overflow-hidden shadow-lg border border-zinc-200"
          >
            <div className="relative h-64 md:h-auto">
              <Image src={pkg.image} alt={pkg.name} fill className="object-cover" />
              <span className="absolute top-3 left-0 bg-red-500 text-white px-3 rounded-r-full py-1 text-md font-medium">
                Special Offer
              </span>
            </div>

            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">{pkg.name}</h3>
                <p className="font-medium text-zinc-700 mb-2">{pkg.duration}</p>
                <p className="text-md text-zinc-600 mb-3">{pkg.route}</p>
                {/* <p className="text-lg font-bold text-zinc-800 mb-3">{pkg.price}</p> */}
                <div className="text-md">
                  <h4 className="font-semibold text-zinc-800 text-md mb-2">Package Inclusions:</h4>
                  <ul className="list-disc list-inside space-y-0.5 text-zinc-600 text-md">
                    {pkg.inclusions.map((inc, i) => (
                      <li key={i}>{inc}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 mb-1 flex gap-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center justify-center gap-2 bg-orange-700 text-white px-4 py-2 rounded-sm hover:bg-orange-800 transition"
                >
                  Enquire Now <ArrowRight size={16} />
                </button>
                <BookingModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
                <button className="flex items-center justify-center gap-2 border border-zinc-800 text-zinc-700 px-4 py-2 rounded-sm hover:bg-teal-50 transition">
                  <Phone size={16} /> Call Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        ref={featuresRef}
        variants={fadeUp}
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        className="mt-12 md:mt-20"
      >
        <h2 className="text-zinc-800 text-3xl md:text-4xl mb-6 text-center font-bold">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8 max-w-7xl mx-auto px-6 md:px-10">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 bg-white"
            >
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-[20px] font-semibold text-zinc-800 mb-2">{f.title}</h3>
              <p className="text-md text-zinc-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
