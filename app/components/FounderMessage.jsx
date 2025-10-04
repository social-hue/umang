"use client";
import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 md:px-12  flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/new_one.webp" // replace with your actual image path
              alt="Founder"
              // fill
              width={692}
              height={775}
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="mt-4 w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl font-semibold text-teal-700 mb-4">
            About the <span className="text-pink-600">Founder</span>
          </h1>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            With over 25 years of leadership in the hospitality industry,
            Mr. Sanjayy Bharadwajj knows how to make people feel truly at home.
            With a rare mix of strategic smarts and a deep love for crafting
            meaningful experiences, Mr. Bharadwajj has spent his career decoding
            what makes places come alive and people smile.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            From market research to lifestyle design, he’s worn many hats, always
            guided by a keen understanding of human behaviour and an eye for
            comfort, joy & connection. Now, he’s pouring all that wisdom into a
            new venture close to his heart: Umang Living – India’s first
            multi-city independent senior living community.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            Thoughtfully created to offer vibrant, dignified, and holistic living
            for the elderly, Umang is not about slowing down, it’s about living
            fully, joyfully and on your own terms.
          </p>
          <p className="text-gray-700 text-xl leading-relaxed mb-2">
            With Umang Living, Mr. Bharadwajj hopes to do more than build
            beautiful residences – he wants to build a community where every day
            brings companionship, purpose, and a strong cup of chai.
          </p>
          <h3 className="text-xl font-bold text-gray-900">
            Mr. Sanjayy Bharadwajj
          </h3>
          <p className="text-gray-600 text-lg">Founder, CEO</p>
        </div>
      </div>
    </section>
  );
}
