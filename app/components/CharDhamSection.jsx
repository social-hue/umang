"use client";
import { ArrowRight, Award, Globe2, Headphones, ShieldCheck } from "lucide-react";
import TourForm from "./Form/TravelForm";
import TourPackages from "./TourPackages";
import ForeignTours from "./ForeignTours";
import SpiritualTours from "./SpiritualTours";

export default function CharDhamSection() {

  const features = [
    {
      icon: <Award className="w-10 h-10 text-teal-900" />,
      title: "15+ Years of Excellence",
      desc: "With over a decade of experience, we have mastered the art of crafting unforgettable pilgrimages.",
    },
    {
      icon: <Globe2 className="w-10 h-10 text-teal-900" />,
      title: "50+ Destinations",
      desc: "Let us take you beyond destinations - to stories, culture, and moments that define the real India.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-teal-900" />,
      title: "24×7 Customer Support",
      desc: "Our travel experts are always just a call away — before, during, and after your journey.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-teal-900" />,
      title: "100% Travel Safe",
      desc: "Your trust and security matter most. We offer transparent bookings.",
    },
  ];

  return (
    <>
      <section className="main_width py-8 relative overflow-hidden">
        <div className="mb-12 text-center">
          <h2 className="text-zinc-800 text-3xl mb-3 md:text-[32px] font-bold">
            Explore Our Curated Tours <ArrowRight className="inline-block" size={28} />
          </h2>
          <p className="max-w-3xl mb-8 mx-auto text-md text-zinc-600">
            From misty mountains to golden beaches - explore destinations that capture the spirit, color & charm of India's incredible diversity
          </p>
          <TourPackages />
        </div>
        <div className="mb-12 text-center">
          <h2 className="text-zinc-800 text-3xl mb-3 md:text-[32px] font-bold">
            Explore Our Spiritual Tours <ArrowRight className="inline-block" size={28} />
          </h2>
          <p className="max-w-3xl mb-8 mx-auto text-md text-zinc-600">
            Reconnect with your inner self through serene pilgrimage journeys and sacred experiences. Visit holy sites, attend rituals, and travel with peace, purpose, and devotion.
          </p>
          <SpiritualTours />
        </div>
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-zinc-800 text-3xl mb-3 md:text-[32px] font-bold">
            Explore Our International Tours <ArrowRight className="inline-block" size={28} />
          </h2>
          <p className="max-w-3xl mb-8 mx-auto text-md text-zinc-600">
            Explore the world with curated global itineraries designed for comfort and discovery. Travel across iconic destinations with seamless experiences throughout your journey.
          </p>
          <ForeignTours />
        </div>

        <div className="text-center">
          <h2 className="text-zinc-800 text-3xl md:text-[32px] font-bold mb-3">
            Tailored Journeys for Timeless Souls
          </h2>
          <p className="max-w-3xl mx-auto text-md text-zinc-600">
            Discover journeys crafted around your comfort, interests, and dreams. Share your preferences, and we&apos;ll design a personalized travel experience made just for you.
          </p>
        </div>
        <div className="py-8 md:mb-8 grid md:grid-cols-[40%_1fr] xl:grid-cols-[50%_1fr] gap-8 md:gap-0">
          <div className="flex items-center justify-center">
            <img src="/mappp.webp" alt="map" loading="lazy" decoding="async" width={340} height={420} />
          </div>
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <div className="bg-white border-none w-[92%] md:w-full max-w-lg p-2 md:p-6 relative rounded-sm text-zinc-800">
              {/* Heading */}
              <h3 className="text-3xl md:text-2xl font-bold text-zinc-800 mb-4 text-center">
                Customize Your Trip !
              </h3>
              {/* Form */}
              <TourForm />
            </div>
          </div>
        </div>
        {/* Why Choose Us */}
        <section>
          <h2 className="text-zinc-800 text-3xl md:text-[32px] mb-6 md:mb-8 text-center font-bold">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto px-6 md:px-10">
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
        </section>
      </section>
    </>
  );
}
