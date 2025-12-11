"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    title: "Business Development Manager",
    department: "Business",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Mid-level",
    salary: "₹28L – ₹40L",
    description:
      "Drives business growth by identifying opportunities, building client relationships, and securing partnerships that expand the company’s reach.",
  },
  {
    id: 2,
    title: "Telecaller",
    department: "Sales",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Mid-level",
    salary: "₹18L – ₹28L",
    description:
      "Handles incoming and outgoing calls, provides information to customers, and converts inquiries into qualified leads while maintaining accurate records.",
  },
  {
    id: 3,
    title: "HR Manager",
    department: "People & Culture",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Mid–Senior",
    salary: "₹16L – ₹24L",
    description:
      "Oversees recruitment, onboarding, and employee support while ensuring smooth workplace operations and adherence to company policies.",
  },
];

export default function CareersPage() {
  const router = useRouter();
  return (
    <main className="relative overflow-hidden">
      {/* Top Banner / Hero */}
      <section className="relative overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{
            backgroundImage:
              "url('/job-banner-16.jpg')",
          }}
        />

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/65 to-black-50 opacity-70" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="inline-flex max-w-fit items-center gap-2 rounded-full border border-white px-3 py-1 text-xs font-medium text-white shadow">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
            We’re hiring across Sales, HR & Consultants
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl text-white font-bold sm:text-5xl">
              Build meaningful work,
              <span className="bg-linear-to-r from-orange-500 via-orange-450 to-orange-400 bg-clip-text text-transparent">
                {" "}
                with people who care.
              </span>
            </h1>
            <p className="text-sm text-white sm:text-base lg:text-lg">
              We’re a small, focused team crafting thoughtful experiences.
              Join us to solve real problems, ship with intention, and grow in
              an environment that values creativity and passion.
            </p>
          </div>

          {/* Stats */}
          <div className="grid gap-4 text-sm text-gray-900 sm:grid-cols-3 max-w-3xl">
            <div className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-blue-700">
                Open Roles
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">03</p>
              <p className="text-xs text-gray-800">
                Across HR, Sales, Business Development
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-violet-700">
                Work Style
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">
                in-office
              </p>
              <p className="text-xs text-gray-800">
                Remote-friendly with in-person focus.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-pink-700">
                Culture
              </p>
              <p className="mt-2 text-2xl font-semibold text-gray-900">Calm</p>
              <p className="text-xs text-gray-800">
                Growth-minded & people-first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Open positions
            </h2>
            <p className="text-sm text-gray-600">
              Don’t see a perfect fit? You can still{" "}
              <Link href="https://wa.me/919560986669"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp">
              <button className="underline-offset-4 hover:underline text-teal-700">
                send us your profile
              </button>
              </Link>
              .
            </p>
          </div>

          {/* <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-orange-700">
              Product
            </span>
            <span className="rounded-full border border-zinc-300 bg-zinc-100 px-3 py-1 text-zinc-700">
              Engineering
            </span>
            <span className="rounded-full border border-teal-300 bg-teal-100/20 px-3 py-1 text-teal-700">
              People & Ops
            </span>
          </div> */}
        </div>

        {/* Cards */}
        <div className="mt-7 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.id}
              className="group flex flex-col rounded-md border border-gray-200 bg-white shadow-md px-5 py-6"
            >
              {/* Top */}
              <div className="space-y-1">
                {/* <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-teal-700">
                  {job.department}
                </p> */}
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
                  {job.title}
                </h3>
              </div>

              {/* Meta */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-medium">
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-100 text-orange-700 px-2.5 py-1">
                  📍 {job.location}
                </span>
                <span className="inline-flex items-center rounded-full bg-green-100/40 text-green-700 px-2.5 py-1">
                  ⏱ {job.type}
                </span>
                <span className="inline-flex items-center rounded-full bg-zinc-100 text-zinc-700 px-2.5 py-1">
                  ⭐ {job.level}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm text-gray-600 line-clamp-3">
                {job.description}
              </p>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between gap-3 text-xs">
                <div className="text-gray-600">
                  <p className="font-medium text-gray-900">Compensation</p>
                  <p>Competitive Pay</p>
                  {/* <p className="text-[11px] text-gray-500">
                    + equity, insurance & learning budget
                  </p> */}
                </div>

                <button
                  onClick={() =>
                    router.push(`/careers/${job.title.toLowerCase().replace(/ /g, "-")}`)
                  }
                  className="cursor-pointer inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-slate-700 transition-transform duration-150 hover:scale-105"
                >
                  Apply now <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 max-w-3xl text-xs text-gray-600">
          <p>
            We value curiosity, craftsmanship & kindness over perfect resumes.
            If you’re excited about what we’re building but don’t meet
            all criteria — reach out anyway. 🌱
          </p>
        </div>
      </section>
    </main>
  );
}
