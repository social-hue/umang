"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Clock,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Building2,
  Sparkles,
  Globe
} from "lucide-react";

const JOBS_DATA = [
  {
    slug: "business-development-manager",
    title: "Business Development Manager",
    department: "Business",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Senior",
    salary: "₹28L – ₹40L",
    description: "The Business Development Manager will lead franchise expansion, identify potential partners, manage sales pipelines, conduct meetings, and ensure smooth onboarding. The role requires strong communication skills, ownership mindset, and the ability to convert leads into franchise partners.",
    requirements: [
      "Minimum 2–4 years of experience in sales/business development",
      "Strong negotiation and presentation skills",
      "Ability to manage targets and handle high-value conversions",
      "Confidence to lead franchise meetings (online/offline)",
      "Self-driven, disciplined, and result-oriented",
      "Experience in franchise sales is an added advantage"
    ],
    perks: [
      "Fast career growth.",
      "High ownership of work.",
      "Dynamic, innovative environment.",
      "Strong performance incentives."
    ]
  },
  {
    slug: "telecaller",
    title: "Telecaller",
    department: "Sales",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Entry-Mid",
    salary: "₹3L – ₹6L",
    description: "Telecallers will handle incoming and outgoing calls, explain franchise opportunities to leads, qualify them, maintain CRM data, and schedule meetings with the BDM team. This role is the backbone of franchise lead conversion.",
    requirements: [
      "Good communication skills in Hindi & basic English",
      "Confident on calls; able to explain information clearly",
      "Ability to handle high-volume calling & follow-ups",
      "Prior telecalling/telesales experience preferred (not mandatory)",
      "Target-driven, positive attitude, and good at maintaining records"
    ],
    perks: [
      "Quick learning and skill growth.",
      "Supportive team setup.",
      "Opportunities to move into sales/operations."
    ]
  },
  {
    slug: "hr-manager",
    title: "HR Manager",
    department: "People & Culture",
    location: "On-site • Noida",
    type: "Full-time",
    level: "Mid-Senior",
    salary: "₹16L – ₹24L",
    description: "The HR professional will manage hiring, onboarding, payroll coordination, employee engagement, and maintain smooth HR operations across all franchise locations. They will act as a bridge between management and team members.",
    requirements: [
      "1–3 years of HR experience (Fresher with good skills can also apply)",
      "Strong communication, coordination, and documentation skills",
      "Ability to manage recruitment pipelines and onboarding",
      "Basic knowledge of HR policies, salary structure, and compliance",
      "Organized, dependable, and people-friendly personality"
    ],
    perks: [
      "Hands-on hiring experience.",
      "Influence on company culture.",
      "Fast growth in people management.",
      "Leadership development programs"
    ]
  }
];

export default function JobSlugPage() {
  const params = useParams();
  const router = useRouter();
  // const [showModal, setShowModal] = useState(false);
  const [job, setJob] = useState(null);

  const slug = params?.slug;

  useEffect(() => {
    if (slug) {
      const foundJob = JOBS_DATA.find((j) => j.slug === slug);
      setJob(foundJob);
    }
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-slate-900">Position Not Found</h2>
          <p className="text-slate-900">The job you&apos;re looking for doesn&apos;t exist or may have been filled.</p>
          <button
            onClick={() => router.push("/careers")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-700 transition-colors"
          >
            View All Openings
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className="py-6 bg-linear-to-br from-slate-50 via-blue-50/20 to-slate-100/30">
        {/* Container with proper padding */}
        <div className="main_width mx-auto">

          {/* Header Section */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 rounded-full border border-slate-300 mb-6">
              <Sparkles className="w-4 h-4 text-slate-900" />
              <span className="text-sm font-medium text-slate-900">Now Hiring</span>
            </div>

            <h1 className="text-4xl font-bold text-slate-900 mb-3 leading-tight">
              {job.title}
            </h1>

            <p className="text-md text-slate-900 max-w-3xl mb-3 leading-relaxed">
              Join our mission-driven team and contribute to meaningful work that impacts thousands every day.
            </p>

            {/* Job Meta Info */}
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Building2 className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-medium text-slate-700">{job.department}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <MapPin className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-medium text-slate-700">{job.location}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <Clock className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-medium text-slate-700">{job.type}</span>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-slate-200 shadow-sm">
                <TrendingUp className="w-4 h-4 text-slate-900" />
                <span className="text-sm font-medium text-slate-700">{job.level}</span>
              </div>

              {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-500 to-slate-900 rounded-lg shadow-md">
                <DollarSign className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">{job.salary}</span>
              </div> */}
            </div>
          </header>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Main Content - Left Column */}
            <div className="lg:col-span-2 space-y-10">

              {/* About the Role */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-linear-to-br from-teal-800 to-teal-900 rounded-lg flex items-center justify-center shadow-lg">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-teal-900">About the Role</h2>
                </div>
                <p className="text-slate-700 leading-relaxed text-base">
                  {job.description}
                </p>
              </section>

              {/* Requirements */}
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-linear-to-br from-teal-800 to-teal-900 rounded-lg flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-teal-900">What We&apos;re Looking For</h2>
                </div>
                <ul className="space-y-1">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-slate-900 mt-2 shrink-0" />
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Apply CTA */}
              <Link href="https://wa.me/919560986669"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="whatsapp">
              <button
                className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 border-slate-800 hover:text-white hover:bg-slate-800 border-2 rounded-lg text-slate-800 font-semibold text-base shadow-lg hover:shadow-xl hover:from-slate-700 hover:to-slate-900 transition-all duration-200"
              >
                Send Your CV
                <ArrowRight className="w-5 h-5" />
              </button>
              </Link>
            </div>

            {/* Sidebar - Right Column */}
            <aside className="lg:col-span-1 space-y-6">

              {/* Perks & Benefits */}
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Perks & Benefits</h3>
                <ul className="space-y-3">
                  {job.perks.map((perk, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-900 shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm leading-relaxed">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Info Card */}
              <div className="bg-linear-to-br from-slate-50 to-slate-100/50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-3">Why Join Us?</h3>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                  We&apos;re building the future of work with a team of passionate individuals who care deeply about making an impact.
                </p>
                <div className="space-y-2 text-sm text-slate-900">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-slate-900" />
                    <span>On-site culture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-slate-900" />
                    <span>Fast-growing startup</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-slate-900" />
                    <span>Innovative projects</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Bottom Spacing */}
          <div className="h-12" />
        </div>
      </main>
    </>
  );
}