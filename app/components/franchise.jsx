// File: pages/franchise.js
// Next.js page (no TypeScript) built with React + TailwindCSS
// Images used are from Unsplash / Pexels (free-to-use images) - replace as needed

import { useState } from "react";
import Image from "next/image";

export default function FranchisePage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    invest5L: "no",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // simple client-side validation
    if (!form.name || !form.mobile || !form.email) {
      setStatus({ type: 'error', msg: 'Please fill Name, Mobile & Email.' });
      return;
    }
    // Here you should hook to your API endpoint to store/enquire
    // For demo we just simulate success
    setStatus({ type: 'loading', msg: 'Submitting...' });
    setTimeout(() => setStatus({ type: 'success', msg: 'Enquiry submitted. Our team will contact you within 48 hours.' }), 900);

    // reset form optionally
    // setForm({ name: '', mobile: '', email: '', city: '', invest5L: 'no' });
  }

  return (
    <>
      {/* HERO */}
      <header className="py-4 relative bg-white/60 backdrop-blur-sm md:mb-10">
        <div className="mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold leading-tight text-slate-900">Make a Difference – Become a Franchise Partner with <span className="text-amber-600">Umang Living</span></h1>
            <p className="text-lg text-slate-700 max-w-xl">Join India’s most trusted Senior Independent-Living & Home Care brand with minimum investment and be part of a purpose-driven business improving lives across India.</p>

            <div className="mt-4 flex items-start gap-4">
              <a href="#franchise-form" className="inline-flex items-center px-5 py-3 rounded-2xl bg-amber-600 text-white font-medium shadow-lg hover:shadow-xl transition">Enquire Now</a>
              <a href="/umang-franchise-brochure.pdf" download className="inline-flex items-center px-5 py-3 rounded-2xl border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 transition">Download Franchise Brochure</a>
            </div>
            {/* Key numbers */}
            <div className="mt-6 flex flex-wrap gap-4">
              <Stat label="Cities" value="20+" />
              <Stat label="Happy Seniors" value="5,000+" />
              <Stat label="Care Network" value="Pan-India" />
            </div>
          </div>

          <div className="relative h-72 sm:h-96 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
            <Image src="/banner/about-banner.webp" alt="elderly community" layout="fill" objectFit="cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </header>
      <main className="mx-auto px-6 lg:px-8">
        {/* Opportunity Section */}
        <section className="bg-white mt-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-slate-900 mb-3">A Massive Opportunity in India’s Fast-Growing Senior Care Market</h2>
              <p className="text-slate-700">India’s senior population is expanding rapidly. With more than 14 crore elders by 2050, the demand for independent living communities, home care, and wellness services is growing faster than ever. Partnering with Umang Living means stepping into a high-potential market with an established brand trusted by families across India.</p>

              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700">
                <li className="flex items-start gap-3"><IconCheck /> Health &amp; Wellness</li>
                <li className="flex items-start gap-3"><IconCheck /> Assisted Services</li>
                <li className="flex items-start gap-3"><IconCheck /> Safety &amp; Emergency Support</li>
                <li className="flex items-start gap-3"><IconCheck /> Recreation &amp; Community Living</li>
                <li className="flex items-start gap-3"><IconCheck /> Daily Convenience Services</li>
              </ul>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="font-semibold text-lg mb-2">Services at a Glance</h3>
              <div className="grid grid-cols-2 gap-3">
                <ServiceCard title="Home Care Services" />
                <ServiceCard title="Senior Living Communities" />
                <ServiceCard title="Emergency & Safety" />
                <ServiceCard title="Daily Convenience" />
                <ServiceCard title="Engagement & Wellness" />
                <ServiceCard title="Medical Equipment" />
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Story – India’s First Multi-City Senior Independent-Living Community</h2>
            <p className="text-slate-700">Umang Living was created with a simple belief — life after 55 should be joyful, independent, and meaningful. We saw how scattered India’s senior care ecosystem was and decided to build a comprehensive, respectful, and love-driven support system for elders.</p>

            <ul className="mt-3 text-slate-700 space-y-2">
              <li className="flex items-start gap-3"><IconDot /> Modern senior independent-living communities</li>
              <li className="flex items-start gap-3"><IconDot /> 24×7 assisted support</li>
              <li className="flex items-start gap-3"><IconDot /> Personalized home care</li>
              <li className="flex items-start gap-3"><IconDot /> Community bonding &amp; engagement</li>
              <li className="flex items-start gap-3"><IconDot /> A safe, dignified, and premium environment for seniors</li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg h-80 relative">
            <Image src="/travel/agra.jpeg" alt="community" layout="fill" objectFit="cover" />
          </div>
        </section>

        {/* Why Partner */}
        <section className="bg-white rounded-2xl mb-12">
          <h2 className="text-2xl font-semibold mb-4">Why Become an Umang Living Franchise Partner?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Benefit title="Strong Brand Credibility" desc="Stand out with a trusted name known for innovation and excellence in senior living and elder care." />
            <Benefit title="Fast Return on Investment" desc="Our proven business model ensures quicker breakeven and recurring monthly revenues." />
            <Benefit title="Complete Operational Training" desc="Receive full training on running senior care services, managing operations, and ensuring quality service." />
            <Benefit title="Marketing & Lead Support" desc="We provide digital marketing, brand guidelines, and lead-generation support to help you acquire customers quickly." />
            <Benefit title="Dedicated Technology Support" desc="Our tech team will assist you with CRM, service dashboards, training modules, and digital tools." />
            <Benefit title="Comprehensive SOPs" desc="Well-defined Standard Operating Processes to ensure uniform service quality across all franchise locations." />
          </div>
        </section>

        {/* Steps to Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How to Start Your Franchise Journey with Umang Living</h2>
          <div className="grid lg:grid-cols-5 gap-4 items-start">
            <Step num={1} title="Initial Application & Meeting" items={["Fill out the enquiry form","Our team contacts you within 48 hours","We understand your background and goals","You get insights into our business model"]} />
            <Step num={2} title="Document Submission & Review" items={["Submit your KYC","Business profile","Office space / service area photos","Background evaluation"]} />
            <Step num={3} title="Site Verification" items={["Our team evaluates your proposed location/office","Compatibility check","Advance payment for Letter of Intent (LOI)"]} />
            <Step num={4} title="Contract Signing" items={["Agreement finalization","Onboarding formalities","Manpower selection and role training"]} />
            <Step num={5} title="Go-To-Market Training & Launch" items={["2-day intensive GTM training","System onboarding","Marketing and sales support","Continuous mentoring for business growth"]} />
          </div>
        </section>

        {/* Leadership / Champions */}
        <section className="rounded-2xl mb-12">
          <h2 className="text-2xl font-semibold mb-2">The Umang Champions: Leaders of Senior Well-Being</h2>
          <p className="text-slate-700 mb-4">Umang Champions are community leaders dedicated to improving senior quality of life. They bring passion, commitment, and compassion — helping redefine the senior care experience across India.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <LeaderCard name="Smt. Priya Sharma" role="Community Head, Mumbai" img="/people/anupam.webp" />
            <LeaderCard name="Mr. Rakesh Verma" role="Operations, Delhi" img="/people/priti.webp" />
            <LeaderCard name="Ms. Anjali Rao" role="Programs, Bangalore" img="/people/varsha.webp" />
            <LeaderCard name="Mr. Suresh Iyer" role="Training Lead, Chennai" img="/people/ankit.jpeg" />
          </div>
        </section>

        {/* Testimonials & Media */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">What Our Franchise Partners Say</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Testimonial quote="Partnering with Umang Living gave us a credible brand and steady leads from day one." author="— Ankit, Franchise Partner" />
            <Testimonial quote="The training and SOPs made operations so much easier; support is top class." author="— Priya, Franchise Partner" />
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">{/* Media logos placeholder */}
              <h3 className="font-medium mb-2">Media Coverage & Recognition</h3>
              <p className="text-slate-600 text-sm">Logos or article snippets can live here.</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white mt-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Need More Information?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <FAQ q="What is the minimum investment?" a="Typically a starting investment of ₹5 Lakhs is expected for franchise onboarding. Exact figures depend on location and model." />
            <FAQ q="How quickly will I see returns?" a="Return timelines vary by location and execution but our model aims for faster breakeven with recurring revenue streams." />
            <FAQ q="Do you provide training?" a="Yes — complete operational training including GTM, CRM onboarding, and SOPs." />
            <FAQ q="How do I get leads?" a="We provide digital marketing support, lead-gen campaigns, and brand assets to help you start strong." />
          </div>
        </section>

        {/* Final CTA & Form */}
        <section className="rounded-2xl p-8 bg-gradient-to-r from-white to-amber-50 shadow-md md:mb-16" id="franchise-form">
          <div className="mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Begin Your Franchise Journey with Umang Living</h2>
            <p className="text-slate-700 mb-6">A meaningful business opportunity with strong demand, high profitability, and social impact.</p>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl border border-slate-100">
              <div>
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input name="name" value={form.name} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-200 p-3" placeholder="Your full name" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Mobile Number</label>
                <input name="mobile" value={form.mobile} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-200 p-3" placeholder="+91 98XXXXXXX" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input name="email" value={form.email} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-200 p-3" placeholder="name@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">City</label>
                <input name="city" value={form.city} onChange={handleChange} className="mt-1 block w-full rounded-lg border border-slate-200 p-3" placeholder="City" />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Would you like to invest ₹5 Lakhs in a high-impact senior care opportunity?</label>
                <div className="mt-2 flex items-center gap-4">
                  <label className={`px-4 py-2 rounded-lg border ${form.invest5L === 'yes' ? 'bg-amber-600 text-white' : 'bg-white'} cursor-pointer`}>
                    <input type="radio" name="invest5L" value="yes" checked={form.invest5L === 'yes'} onChange={handleChange} className="hidden" /> Yes
                  </label>
                  <label className={`px-4 py-2 rounded-lg border ${form.invest5L === 'no' ? 'bg-amber-600 text-white' : 'bg-white'} cursor-pointer`}>
                    <input type="radio" name="invest5L" value="no" checked={form.invest5L === 'no'} onChange={handleChange} className="hidden" /> No
                  </label>
                </div>
              </div>

              <div className="sm:col-span-2 flex items-center justify-between gap-4 mt-2">
                <button type="submit" className="px-6 py-3 rounded-2xl bg-amber-600 text-white font-medium shadow">Submit Enquiry</button>
                <a href="/umang-franchise-brochure.pdf" download className="px-4 py-2 rounded-lg border border-slate-200">Download Brochure</a>
              </div>

              {status && (
                <div className={`sm:col-span-2 text-sm ${status.type === 'error' ? 'text-red-600' : 'text-green-700'}`}>{status.msg}</div>
              )}
            </form>
          </div>
        </section>
      </main>  
    </>          
  );
}

/* ----------------- Small helper components ----------------- */
function Stat({ label, value }){
  return (
    <div className="px-4 py-3 bg-white rounded-2xl border border-slate-100 shadow-sm">
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-xs text-slate-500">{label}</div>
    </div>
  );
}

function IconCheck(){
  return (
    <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
  );
}
function IconDot(){
  return (
    <svg className="w-2 h-2 text-amber-600 mt-2 flex-shrink-0" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4"/></svg>
  );
}

function ServiceCard({ title }){
  return (
    <div className="p-3 bg-white rounded-lg border border-slate-100 flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-semibold">{title.split(' ')[0].slice(0,1)}</div>
      <div className="text-sm text-slate-700">{title}</div>
    </div>
  );
}

function Benefit({ title, desc }){
  return (
    <div className="p-4 rounded-xl border border-slate-100 bg-white shadow-sm">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-md text-slate-600">{desc}</p>
    </div>
  );
}

function Step({ num, title, items }){
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">{num}</div>
        <div className="text-md font-semibold">{title}</div>
      </div>
      <ul className="text-slate-600 text-md space-y-1">
        {items.map((it, idx) => <li key={idx}>• {it}</li>)}
      </ul>
    </div>
  );
}

function LeaderCard({ name, role, img }){
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-100 text-center shadow-sm">
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-3 relative">
        <Image src={img} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="font-medium">{name}</div>
      <div className="text-xs text-slate-500">{role}</div>
    </div>
  );
}

function Testimonial({ quote, author }){
  return (
    <blockquote className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
      <p className="text-slate-700">“{quote}”</p>
      <footer className="mt-3 text-xs text-slate-500">{author}</footer>
    </blockquote>
  );
}

function FAQ({ q, a }){
  return (
    <div className="p-4 rounded-xl border shadow-sm border-slate-100 bg-white">
      <h4 className="font-medium mb-1">{q}</h4>
      <p className="text-md text-slate-600">{a}</p>
    </div>
  );
}
