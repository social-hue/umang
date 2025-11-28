"use client";
import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { AlertTriangle, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import { Plane, Wallet, Gavel, HeartPulse, Sparkles, ArrowRight } from "lucide-react";
// import Link from "next/link";

export default function FranchisePage() {
  const services = [
    { title: "Travel", icon: Plane },
    { title: "Finance", icon: Wallet },
    { title: "Legal", icon: Gavel },
    { title: "Health & Wellness", icon: HeartPulse },
    // { title: "Lifestyle", icon: Sparkles },
  ];
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    honeypot: ""
  });

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim() || !form.mobile.trim() || !form.email.trim() || !form.city.trim()) {
      toast.error("Please fill all required fields.");
      return false;
    }

    if (!/^[A-Za-z\s]{3,100}$/.test(form.name.trim())) {
      toast.error("Name must be 3–100 letters only.");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Enter a valid email.");
      return false;
    }

    const mob = form.mobile.replace(/[^\d+]/g, "");
    if (mob.length < 10 || mob.length > 14) {
      toast.error("Invalid mobile number.");
      return false;
    }

    if (form.honeypot) return false;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      const token = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });
      const payload = { ...form, recaptchaToken: token };
      const res = await fetch("/api/partner-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        // NO TOAST on success — show modal instead
        setShowModal(true);

        // Reset form
        setForm({
          name: "",
          mobile: "",
          email: "",
          city: "",
          honeypot: "",
        });
      } else {
        toast.error(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error! Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* HERO */}
      <header className="py-4 md:mt-4 relative bg-white/60 backdrop-blur-sm mb-8 md:mb-10">
        <div className="mx-auto lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5 md:space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight text-slate-900">Become Our Franchise Partner & <span className="text-amber-600">Earn From Day One !</span></h1>
            <p className="text-md leading-relaxed text-slate-700 max-w-xl">Join India&apos;s most trusted senior care brand with minimum investment and be part of a purpose-driven business improving lives across India. We offer Health, Travel, Legal & Finance with a complete ecosystem for modern senior living.</p>
            <div className="mt-4 flex items-start gap-4">
              <a href="#franchise-form" className="inline-flex items-center px-5 py-3 rounded-2xl bg-amber-600 text-white font-medium shadow-lg hover:shadow-xl transition">Enquire Now</a>
              <a href="/Franchise_Brochure.pdf" download className="inline-flex items-center px-5 py-3 rounded-2xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 transition">Download Brochure</a>
            </div>
            {/* Key numbers */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Stat label="Cities" value="15+" />
              <Stat label="Happy Seniors" value="3000+" />
              <Stat label="Care Network" value="Pan-India" />
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer">
            <Image
              src="/Scan_here.webp"
              alt="elderly community"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </header>
      <main className="mx-auto lg:px-8">
        <h2 className="py-3 text-2xl text-slate-900 font-bold">Services at a glance <span className="inline-block -mb-1 text-zinc-900 w-6 h-6"><ArrowRight /></span></h2>
        <div className="py-4 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="flex flex-col items-center gap-3">
                <Icon className="h-10 w-10 text-amber-600" strokeWidth={1.6} />
                <p className="text-md font-semibold text-slate-700">{s.title}</p>
              </div>
            );
          })}
        </div>
        {/* Opportunity Section */}
        <section className="bg-white mt-8 mb-12">
          <div className="grid items-start">
            <div className="">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">A Massive Opportunity in India’s Fast-Growing Senior Care Market</h2>
              <p className="text-slate-700 leading-relaxed">India's urban senior citizen population is flourishing. Currently, there are
                about 1.4 crore urban senior citizens, and this number is expected to
                triple by 2050. The senior care market is valued at an impressive
                ₹1,42,800 crores, with senior spending around ₹8,500 each month on
                health and daily needs.</p>
              <p className="py-2 text-slate-700">This is a significant opportunity for franchise partners to make a
                meaningful impact in the senior citizen care space and contribute to a
                rapidly growing sector of the economy.</p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-start gap-3"><IconCheck /> Health &amp; Wellness</li>
                <li className="flex items-start gap-3"><IconCheck /> Assisted Services</li>
                <li className="flex items-start gap-3"><IconCheck /> Safety &amp; Emergency Support</li>
                <li className="flex items-start gap-3"><IconCheck /> Recreation &amp; Community Living</li>
                <li className="flex items-start gap-3"><IconCheck /> Daily Convenience Services</li>
              </ul>
            </div>
            {/* <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-semibold text-lg mb-2">Services at a Glance</h3>
              <div className="grid grid-cols-2 gap-3">
                <ServiceCard title="Financial" />
                <ServiceCard title="Health & Wellness" />
                <ServiceCard title="Travel" />
                <ServiceCard title="Legal" />
                <ServiceCard title="Lifestyle" />
              </div>
            </div> */}
          </div>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl text-slate-800 font-semibold">Our Story – India’s First Multi-City Senior Care Community</h2>
            <p className="text-slate-700 leading-relaxed">Umang Living was created with a simple belief - life after 55 should be joyful, independent, and meaningful. We saw how scattered India’s senior care ecosystem was and decided to build a comprehensive, respectful, and love-driven support system for elders.</p>

            <ul className="mt-3 text-slate-700 space-y-2">
              <li className="flex items-start gap-3"><IconDot /> 24×7 assisted support</li>
              <li className="flex items-start gap-3"><IconDot /> Personalized home care</li>
              <li className="flex items-start gap-3"><IconDot /> Community bonding &amp; engagement</li>
              <li className="flex items-start gap-3"><IconDot /> A safe, dignified, and premium environment for seniors</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-80 relative">
            <Image src="/elder-walking.webp" alt="community" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Why Partner */}
        <section className="bg-white rounded-2xl mb-12">
          <h2 className="text-2xl text-slate-900 font-semibold mb-4">Why Become an Umang Living Franchise Partner ?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Benefit title="Fast Growing Brand" desc="With Umang Living, you instantly establish a distinguished brand
presence." />
            <Benefit title="Profits" desc="We've done the groundwork,
so you will see a faster return on your investment. " />
            <Benefit title="Expert Training" desc="We provide expert training to ensure you succeed from day one.
" />
            <Benefit title="Marketing Support" desc="We provide successful marketing
strategies to broaden your audience and attract new customers.
" />
            <Benefit title="Dedicated Tech Support" desc="Our tech support team is available to assist you with any
technological hurdles" />
            <Benefit title="SOPs" desc="Well-defined Standard Operating Processes to ensure uniform service quality across all franchise locations." />
          </div>
        </section>

        {/* Steps to Start */}
        <section className="mb-10">
          <h2 className="text-2xl text-slate-900 font-semibold mb-4">How to Start Your Franchise Journey with Umang Living ?</h2>
          <div className="grid lg:grid-cols-5 gap-4 items-start">
            <Step num={1} title="Initial Application" items={["Submit an Application", "Introduction and Alignment", "Business Model Evaluation"]} />
            <Step num={2} title="Document Submit" items={["Provide Important Documents", "All the documents will be reviewed"]} />
            <Step num={3} title="Site Verification" items={["Assess the Location", "Secure the Location"]} />
            <Step num={4} title="Contract Signing" items={["Finalize the Partnership", "Welcome to Umang Living", "Manpower Selection"]} />
            <Step num={5} title="GTM Training & Launch" items={["Attend Training Smooth", "Onboarding Process", "Continuous Support"]} />
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 rounded-2xl bg-slate-100/20 p-6 border border-gray-200 shadow-md relative overflow-hidden grid grid-cols-1 md:grid-cols-[70%_30%] gap-6 md:gap-2 "
        >
          {/* Floating Accent */}
          {/* <div className="absolute -top-10 -right-10 h-32 w-32 bg-amber-200/30 rounded-full blur-3xl"></div> */}
          {/* <div className="absolute -bottom-10 -left-10 h-32 w-32 bg-amber-300/20 rounded-full blur-3xl"></div> */}

          {/* LEFT SECTION — IMPORTANT NOTICE */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-800">Important Notice</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-3">
              A refundable application deposit of
              <span className="font-semibold text-gray-900"> ₹10,000 </span>
              is required to register your application.
            </p>

            <ul className="text-gray-700 mb-3">
              <li className="flex gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>The amount will be refunded soon, if your application is not approved.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600 mt-1">•</span>
                <span>If approved, the deposit will be adjusted towards your processing fee.</span>
              </li>
            </ul>

            <p className="text-gray-700">
              Please share the{" "}
              <span className="font-semibold text-gray-900">payment proof</span> and the{" "}
              <span className="font-semibold text-gray-900">filled application form </span> to <span className="font-semibold text-gray-900">info@umangliving.com</span> for
              verification.
            </p>

            <div className="mt-5 flex items-center gap-2 text-sm text-gray-600 font-medium">
              <IndianRupee className="w-4 h-4" />
              Refundable Deposit Policy
            </div>
          </div>

          {/* RIGHT SECTION — DOWNLOAD BUTTONS */}
          <div className="flex flex-col gap-3 justify-center text-sm">
            <a href="/Franchise_Brochure.pdf" download className="bg-amber-600/90 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg text-center transition">
              Franchise Brochure
            </a>
            <a href="/Franchise_Form.pdf" download className="bg-amber-600/90 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg text-center transition">
              Franchise Form
            </a>
            <a href="/SOP_SLA.pdf" download className="bg-amber-600/90 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg text-center transition">
              Download SOP
            </a>
            <a href="/FAQ.pdf" download className="bg-amber-600/90 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg text-center transition">
              Download FAQs
            </a>
          </div>
        </motion.div>
        {/* Leadership / Champions */}
        {/* <section className="rounded-2xl mb-12">
          <h2 className="text-2xl font-semibold mb-2">The Umang Champions: Leaders of Senior Well-Being</h2>
          <p className="text-slate-700 mb-4">Umang Champions are community leaders dedicated to improving senior quality of life. They bring passion, commitment, and compassion — helping redefine the senior care experience across India.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <LeaderCard name="Smt. Priya Sharma" role="Community Head, Mumbai" img="/people/anupam.webp" />
            <LeaderCard name="Mr. Rakesh Verma" role="Operations, Delhi" img="/people/priti.webp" />
            <LeaderCard name="Ms. Anjali Rao" role="Programs, Bangalore" img="/people/varsha.webp" />
            <LeaderCard name="Mr. Suresh Iyer" role="Training Lead, Chennai" img="/people/ankit.jpeg" />
          </div>
        </section> */}

        {/* Testimonials & Media */}
        <section className="mb-10">
          <h2 className="text-2xl text-slate-900 font-semibold mb-4">What Our Franchise Partners Say ?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Testimonial quote="Partnering with Umang Living gave us a credible brand and steady leads from day one." author="— Ankit, Franchise Partner" />
            <Testimonial quote="The training and SOPs made operations so much easier; support is top class." author="— Priya, Franchise Partner" />
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white mt-8 mb-12">
          <h2 className="text-2xl text-slate-900 font-semibold mb-4">Need More Information ?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <FAQ q="What is the minimum investment?" a="Typically a starting investment of ₹4 Lakhs is expected for franchise onboarding. Exact figures depend on location and model." />
            <FAQ q="How quickly will I see returns?" a="Our model is designed to help you start earning from day one. With a robust, transparent system built on trust and operational security" />
            <FAQ q="Do you provide training?" a="Yes - complete operational training including Go-To-Marketing, CRM onboarding, and SOPs." />
            <FAQ q="How do I get leads?" a="We provide digital marketing support, lead-gen campaigns, and brand assets to help you start strong." />
          </div>
        </section>

        {/* Final CTA & Form */}
        <section className="rounded-2xl border-1 border-amber-200/60 p-6 bg-gradient-to-r from-amber-50 to-amber-50 shadow-md mb-10 md:mb-16 scroll-mt-32" id="franchise-form">
          <div className="mx-auto">
            <h2 className="text-2xl text-slate-900 font-semibold mb-2">Begin Your Franchise Journey with Umang Living</h2>
            <p className="text-slate-700 mb-6">A meaningful business opportunity with strong demand, high profitability, and social impact.</p>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" name="honeypot" className="hidden" value={form.honeypot} onChange={handleChange} />
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 block w-full text-slate-700 rounded-lg border border-slate-300 p-3"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                <input
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full text-slate-700 rounded-lg border border-slate-300 p-3"
                  placeholder="+91 98XXXXXXX"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 block w-full text-slate-700 rounded-lg border border-slate-300 p-3"
                  placeholder="name@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">City</label>
                <input
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  className="mt-1 block w-full  text-slate-700 rounded-lg border border-slate-300 p-3"
                  placeholder="City"
                />
              </div>

              {/* <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">
                  Would you like to invest ₹4 lakh in a high-impact senior care opportunity?
                </label>
                <div className="mt-2 flex items-center gap-2">
                  <label className={`px-4 py-2 text-slate-700 rounded-lg border cursor-pointer 
            ${form.investL === "yes" ? "bg-amber-600 text-slate-700" : "bg-white"}`}>
                    <input type="radio" name="investL" value="yes" className="hidden"
                      checked={form.investL === "yes"} onChange={handleChange} /> Yes
                  </label>

                  <label className={`px-4 py-2 text-slate-700 rounded-lg border cursor-pointer 
            ${form.investL === "no" ? "bg-amber-600 text-slate-700" : "bg-white"}`}>
                    <input type="radio" name="investL" value="no" className="hidden"
                      checked={form.investL === "no"} onChange={handleChange} /> No
                  </label>
                </div>
              </div> */}

              <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`cursor-pointer px-4 md:px-6  py-2 md:py-3 rounded-xl bg-amber-600 text-white font-medium shadow 
    transition-all duration-300 ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-amber-700"
                    }`}
                >
                  {loading ? "Sending..." : "Submit Enquiry"}
                </button>

                <a href="/Franchise_Brochure.pdf" download className="cursor-pointer text-slate-800 px-4 py-2 rounded-xl border border-slate-200">
                  Download Brochure
                </a>
              </div>
            </form>
          </div>
        </section>
        {showModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full text-center shadow-lg relative">

              {/* Close Button */}
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer absolute top-4 right-6 rounded-full border-slate-700 text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

              <h2 className="text-2xl font-semibold text-slate-800">
                Thank You !
              </h2>
              <p className="mt-2 text-slate-600">
                We'll get back to you shortly.
                You can download the required documents below.
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="/Franchise_Form.pdf"
                  download
                  className="block w-full text-center px-4 py-3 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition"
                >
                  Download Franchise Form
                </a>

                <a
                  href="/SOP_SLA.pdf"
                  download
                  className="block w-full text-center px-4 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition"
                >
                  Download SOP
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

/* ----------------- Small helper components ----------------- */
function Stat({ label, value }) {
  return (
    <div className="px-4 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );
}
function IconDot() {
  return (
    <svg className="w-2 h-2 text-amber-600 mt-2 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
  );
}

// function ServiceCard({ title }) {
//   return (
//     <div className="p-3 bg-white rounded-lg border border-slate-100 flex items-center gap-3">
//       <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">{title.split(' ')[0].slice(0, 1)}</div>
//       <div className="text-sm text-slate-700">{title}</div>
//     </div>
//   );
// }

function Benefit({ title, desc }) {
  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="text-md text-slate-600">{desc}</p>
    </div>
  );
}

function Step({ num, title, items }) {
  return (
    <div className="p-4 md:p-3 md:min-h-[200px] rounded-xl bg-white border border-slate-100 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-7 h-7 rounded-full bg-amber-600 text-white text-md flex items-center justify-center font-semibold">{num}</div>
        <div className="text-md text-slate-800 font-semibold">{title}</div>
      </div>
      <ul className="text-slate-600 text-md space-y-1">
        {items.map((it, idx) => <li key={idx}>• {it}</li>)}
      </ul>
    </div>
  );
}

// function LeaderCard({ name, role, img }) {
//   return (
//     <div className="p-4 rounded-xl bg-white border border-slate-100 text-center shadow-sm">
//       <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 relative">
//         <Image src={img} alt={name} layout="fill" objectFit="cover" />
//       </div>
//       <div className="font-medium">{name}</div>
//       <div className="text-xs text-slate-500">{role}</div>
//     </div>
//   );
// }

function Testimonial({ quote, author }) {
  return (
    <blockquote className="p-4 md:p-6 rounded-2xl bg-slate-50 border border-slate-100">
      <p className="text-slate-700">“{quote}”</p>
      <footer className="mt-3 text-xs text-slate-500">{author}</footer>
    </blockquote>
  );
}

function FAQ({ q, a }) {
  return (
    <div className="p-4 rounded-xl border shadow-sm border-slate-100 bg-white">
      <h4 className="font-medium text-slate-800 mb-1">{q}</h4>
      <p className="text-md text-slate-600">{a}</p>
    </div>
  );
}
