"use client";
import { Building2, HeartHandshake, Network, Star } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./Button";

// reusable variants for consistency
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export default function PartnerPage() {
  return (
    <section className="main_width py-8 overflow-hidden">
      {/* HERO SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-6xl mx-auto text-center md:mb-12"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-teal-700 mb-4">
          Partner with Umang Living - You Build, We Run & Manage
        </h1>
        <p className="text-lg md:text-xl text-zinc-800 leading-relaxed max-w-3xl mx-auto">
          India's leading <strong>senior living community</strong>, offering
          end-to-end <strong>operations, sales, marketing,</strong> and <strong>property management</strong> for trusted retirement homes.
        </p>
      </motion.div>

      {/* WHY PARTNER WITH US */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-10 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4"
        >
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
              "Creating job opportunities from within the community, fostering growth and purpose.",
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index * 0.15}
                className="flex items-start gap-3"
              >
                <Star
                  className="w-5 h-5 text-yellow-500 fill-yellow-500 flex-shrink-0 mt-1.5"
                  strokeWidth={0}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Grid cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {[
            {
              icon: Star,
              title: "End-to-end engine",
              desc: "Exclusive sales + on-ground property management with pricing governance, collections and channel network.",
            },
            {
              icon: Building2,
              title: "Reliable demand",
              desc: "Targeted marketing to seniors and NRI families actively seeking retirement homes in India.",
            },
            {
              icon: HeartHandshake,
              title: "Quality of Life",
              desc: "Trained staff, wellness programs, tele-doctor/legal/travel services—ageing with independence.",
            },
            {
              icon: Network,
              title: "Transparent outcomes",
              desc: "Clear pricing, RERA processes, measurable KPIs and resident satisfaction that protects brand and resale value.",
            },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i * 0.1}
              >
                <Icon className="text-yellow-500 w-10 h-10 mb-3" />
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">
                  {card.title}
                </h3>
                <p className="text-zinc-800 text-lg">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center md:py-6 mb-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4">
          Join Hands with Umang Living
        </h2>
        <p className="text-zinc-800 text-xl max-w-2xl mx-auto mb-6">
          Partnering with Umang Living means joining a movement redefining retirement
          living in India. Let's collaborate to create vibrant, emotionally fulfilling,
          and professionally managed senior living communities.
        </p>
        <Button />
      </motion.div>
    </section>
  );
}
