"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Briefcase, Clock, TrendingUp, DollarSign, CheckCircle, ArrowRight, Building2, Sparkles } from "lucide-react";
import Community from "@/app/components/Community";

export default function JobSlugPage() {
  const { slug } = useParams();
  const router = useRouter();
 
  const jobs = [
    {
      slug: "business-development-manager",
      title: "Business Development Manager",
      department: "Design",
      location: "Remote • India",
      type: "Full-time",
      level: "Senior",
      salary: "₹28L – ₹40L",
      description:
        "As a Senior Product Designer, you will craft beautiful and functional user experiences across our core products. You will collaborate deeply with Engineering and Product teams, taking ownership from ideation to final UI polish. If you have strong leadership skills and would like to work closely with people every day, you should consider a role as a business manager. These professionals oversee the productivity of employees and develop innovative strategies and goals to improve the company's overall performance. There are certain skills and abilities business managers should have to excel in the role. In this article, we review what a business manager is, the different types of managers in business, the skills business managers should have and the environment they typically work in.",
      requirements: [
        "5+ years of product design experience",
        "Strong portfolio demonstrating UI/UX depth",
        "Experience building design systems",
        "Proficiency in Figma",
        "Ability to collaborate cross-functionally",
      ],
      perks: [
        "Remote-friendly environment",
        "Learning & development budget",
        "Comprehensive health insurance",
        "Annual retreats & off-sites",
      ],
    },
    {
      slug: "telecaller",
      title: "Telecaller",
      department: "Engineering",
      location: "Hybrid • Bengaluru",
      type: "Full-time",
      level: "Mid-level",
      salary: "₹18L – ₹28L",
      description:
        "As a Frontend Engineer, you will develop high-quality user interfaces using React and modern tooling. You will work closely with UI/UX designers and backend engineers to bring features to life.",
      requirements: [
        "3+ years of experience with React",
        "Strong JavaScript fundamentals",
        "Experience with TailwindCSS",
        "Understanding of performance optimization",
        "Experience with Next.js is a plus",
      ],
      perks: [
        "Hybrid-friendly work culture",
        "Top-tier hardware (MacBook)",
        "Wellness reimbursements",
        "Paid certifications",
      ],
    },
    {
      slug: "hr-manager",
      title: "HR Manager",
      department: "People & Culture",
      location: "On-site • Mumbai",
      type: "Full-time",
      level: "Mid–Senior",
      salary: "₹16L – ₹24L",
      description:
        "Lead People Operations with a focus on culture, employee experience, and process improvements. Work closely with leadership to strengthen team engagement.",
      requirements: [
        "4+ years in HR/People Operations",
        "Excellent communication skills",
        "Experience managing employee lifecycle",
        "Understanding HR compliance",
        "Empathetic & people-first mindset",
      ],
      perks: [
        "On-site meals",
        "Health and dental insurance",
        "Annual off-sites",
        "Growth opportunities",
      ],
    },
  ];

  const [job, setJob] = useState(null);

  useEffect(() => {
    const foundJob = jobs.find((j) => j.slug === slug);
    setJob(foundJob);
  }, [slug]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-slate-800">Job Not Found</h2>
          <p className="text-slate-600 mt-2">The position you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (<>
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
     <div className="relative max-w-7xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 bg-white/60 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-slate-700">Now Hiring</span>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-slate-900 leading-tight">
              {job.title}
            </h1>
            <p className="text-md text-slate-600 max-w-2xl leading-relaxed">
              Join our mission-driven team and contribute to meaningful work that impacts thousands every day. Be part of something extraordinary.
            </p>
          </div>

          {/* Quick Info Pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
              <Building2 className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{job.department}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
              <MapPin className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200/60 shadow-sm">
              <TrendingUp className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">{job.level}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-500 rounded-full shadow-md">
              <DollarSign className="w-4 h-4 text-white" />
              <span className="text-sm font-semibold text-white">{job.salary}</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description Card */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">About the Role</h2>
              </div>
              <p className="text-slate-700 leading-relaxed text-md">{job.description}</p>
            

            {/* Requirements Card */}
              <div className="mt-4 flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">What We're Looking For</h2>
              </div>
              <div className="space-y-2">
                {job.requirements.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-br from-orange-500 to-orange-600"></div>
                    <p className="text-slate-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            

            {/* CTA Button */}
            <button
              onClick={() => router.push(`/apply/${job.slug}`)}
              className="group w-full lg:w-auto inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-600 via-orange-600 to-orange-500 rounded-md text-white font-semibold text-md shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-5">
            {/* Role Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-md border border-slate-200/60 shadow-lg shadow-slate-200/50 p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                Role Details
              </h3>
              <div className="space-y-3">
                <div className="group/detail">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Department</div>
                  <div className="text-slate-900 font-medium">{job.department}</div>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
                
                <div className="group/detail">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Location</div>
                  <div className="text-slate-900 font-medium">{job.location}</div>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
                
                <div className="group/detail">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Employment Type</div>
                  <div className="text-slate-900 font-medium">{job.type}</div>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
                
                <div className="group/detail">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Experience Level</div>
                  <div className="text-slate-900 font-medium">{job.level}</div>
                </div>
                <div className="h-px bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200"></div>
                
                <div className="group/detail">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Salary Range</div>
                  <div className="text-transparent bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text font-bold text-md">{job.salary}</div>
                </div>
              </div>
            </div>

            {/* Perks Card */}
            {/* <div className="bg-gradient-to-br from-orange-50 to-orange-50 rounded-3xl border border-orange-200/60 shadow-lg shadow-orange-200/30 p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                Perks & Benefits
              </h3>
              <div className="space-y-4">
                {job.perks.map((perk, i) => (
                  <div key={i} className="flex items-start gap-3 group/perk">
                    <div className="mt-0.5 w-5 h-5 rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 group-hover/perk:scale-110 transition-transform">
                      <CheckCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{perk}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
    <Community />
    </>
  );
}