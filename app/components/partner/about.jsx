"use client";
import { Building2, HeartHandshake, Network, Users, Star } from "lucide-react";
import Button from "./Button";

export default function PartnerPage() {
  return (
    <section className="main_width py-8">
      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center md:mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4">
          Partner with Umang Living - You Build, We Run & Manage
        </h1>
        <p className="text-lg md:text-xl text-zinc-800 leading-relaxed max-w-3xl mx-auto">
          India's leading partner in <strong>senior living community management</strong>,
          offering end-to-end <strong>operations, sales, marketing,</strong> and
          <strong> property management</strong> for trusted retirement homes.
        </p>
      </div>

      {/* WHY PARTNER WITH US */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-10 mb-20">
        <div className="mt-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4">
            Why Partner with Us ?
          </h2>
          <p className="text-zinc-800 text-xl mb-6">
            <strong>Umang Living</strong> partners with developers and serves seniors/families with one promise: we sell faster and run Gold Standard communities. We bring a ready demand funnel, RERA-compliant sales operations, and a proven property-management model that turns inventory into happy, long-term residents.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 mb-4 text-left">
            Our Unique Strengths (USP)
          </h2>
          <ul className="space-y-3 text-zinc-800 text-xl">
            {[
              "Largest senior living community network in India with in-house expertise in Operations, Sales, Marketing & Property Management.",
              "Professionally trained staff dedicated to senior care excellence.",
              "Team of healthcare professionals, gerontologists, travel partners, finance experts, and community managers.",
              "Strong connection with senior citizens and NRI audiences seeking trusted retirement homes.",
              "Creating job opportunities from within the community, fostering growth and purpose."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Star
                  className="w-5 h-5 text-yellow-500 fill-yellow-500 flex-shrink-0 mt-1.5"
                  strokeWidth={0}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Grid cards - responsive for tablet */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <Star className="text-yellow-500 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">
              End-to-end engine
            </h3>
            <p className="text-zinc-800 text-lg">
              Exclusive sales + on-ground property management with pricing governance, collections and channel network.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <Building2 className="text-yellow-500 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">
              Reliable demand
            </h3>
            <p className="text-zinc-800 text-lg">
              Targeted marketing to seniors and NRI families actively seeking retirement homes in India.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <HeartHandshake className="text-yellow-500 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">
              Quality of Life
            </h3>
            <p className="text-zinc-800 text-lg">
              Trained staff, wellness programs, tele-doctor/legal/travel services—ageing with independence.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
            <Network className="text-yellow-500 w-10 h-10 mb-3" />
            <h3 className="text-xl font-semibold text-zinc-800 mb-2">
              Transparent outcomes
            </h3>
            <p className="text-zinc-800 text-lg">
              Clear pricing, RERA processes, measurable KPIs and resident satisfaction that protects brand and resale value.
            </p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center md:py-8 mb-6">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 mb-4">
          Join Hands with Umang Living
        </h2>
        <p className="text-zinc-800 text-xl max-w-2xl mx-auto mb-6">
          Partnering with Umang Living means joining a movement redefining retirement
          living in India. Let's collaborate to create vibrant, emotionally fulfilling,
          and professionally managed senior living communities.
        </p>
        <Button />
      </div>
    </section>
  );
}