"use client";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { itineraries } from "@/app/StaticData/itineraries";
import Image from "next/image";
import { Sun, Moon, MapPin, Clock, Phone, CreditCard, FileText, Plane, Calendar, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AyodhyaTour() {
    
    const { slug } = useParams();
    const data = itineraries[slug];
    const [active, setActive] = useState(1);
    if (!data) return notFound();
    const activeDay = data.days.find((d) => d.day === active) || data.days[0];

    return (
        <>
            <div className="main_width py-3 md:py-8 text-slate-800">
                {/* HEADER */}
                <header>
                    <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                        {data.title}
                    </h1>
                    <p className="mt-2 text-md md:text-base text-slate-600">
                        {data.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <span className="bg-slate-800 text-white text-sm px-3 py-1 rounded-full">
                            {data.duration}
                        </span>
                        <span className="bg-white border border-slate-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <MapPin size={14} /> {data.location}
                        </span>
                        <span className="bg-white border border-slate-200 text-sm px-3 py-1 rounded-full flex items-center gap-1">
                            <Clock size={14} /> {data.pace}
                        </span>
                    </div>
                </header>
                <section className="py-8">
                    <div className="group relative bg-white rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 grid grid-cols-1 lg:grid-cols-12">
                        {/* Left: Image Section (Occupies 5 columns on large screens) */}
                        <div className="relative h-[320px] lg:h-auto lg:col-span-5 overflow-hidden">
                            <div className="absolute inset-0 bg-stone-900/0 z-10 transition-colors duration-500"></div>
                            <Image
                                src={data.image}
                                alt="Trip Destination"
                                fill
                                className="object-cover"
                            />
                            {/* Floating Location Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-xs font-medium tracking-wide text-stone-800 shadow-sm">
                                    <MapPin size={12} className="text-stone-600" />
                                    {data.country}
                                </span>
                            </div>
                        </div>
                        {/* Right: Content Section (Occupies 7 columns) */}
                        <div className="lg:col-span-7 p-8 flex flex-col justify-between">

                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="inline-block w-8 h-px bg-stone-400"></span>
                                        <span className="text-xs font-semibold tracking-[0.2em] text-stone-600 uppercase">Travel Itinerary</span>
                                    </div>
                                    <h2 className="text-3xl font-light text-stone-900 leading-tight">
                                        Heritage & <span className="font-serif italic text-stone-600">{data.vibe}</span>
                                    </h2>
                                </div>
                                <span className="inline-flex self-start items-center gap-2 px-4 py-1.5 rounded-full border border-teal-900/10 bg-teal-50/50 text-teal-800 text-xs font-medium uppercase tracking-wider">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
                                    </span>
                                    Booking Available
                                </span>
                            </div>

                            {/* Key Metrics Grid */}
                            <div className="grid grid-cols-3 gap-6 py-4 border-y border-stone-100 mb-6">
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center gap-2 text-stone-400 mb-1">
                                        <Calendar size={14} />
                                        <span className="text-[10px] uppercase tracking-wider font-semibold">Start Date</span>
                                    </div>
                                    <span className="text-stone-800 font-medium">{data.date}</span>
                                </div>
                                <div className="flex flex-col gap-1 border-l border-stone-100 pl-6">
                                    <div className="flex items-center gap-2 text-stone-400 mb-1">
                                        <Sun size={14} />
                                        <span className="text-[10px] uppercase tracking-wider font-semibold">Duration</span>
                                    </div>
                                    <span className="text-stone-800 font-medium">{data.day}</span>
                                </div>
                                <div className="flex flex-col gap-1 border-l border-stone-100 pl-6">
                                    <div className="flex items-center gap-2 text-stone-400 mb-1">
                                        <Moon size={14} />
                                        <span className="text-[10px] uppercase tracking-wider font-semibold">Nights</span>
                                    </div>
                                    <span className="text-stone-800 font-medium">{data.night}</span>
                                </div>
                            </div>

                            {/* Inclusions / Exclusions Split */}
                            <div className="grid md:grid-cols-2 gap-8 mb-6">
                                {/* Inclusions */}
                                <div>
                                    <h4 className="text-sm font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                        Included in Package
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Breakfast & Dinner', 'Luxury Transport', 'Premium Stay', 'Guided Sightseeing'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-stone-600">
                                                <CheckCircle2 size={16} className="text-teal-600/80 stroke-[1.5]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Exclusions */}
                                <div>
                                    <h4 className="text-sm font-semibold text-stone-900 mb-4 opacity-80">
                                        Not Included
                                    </h4>
                                    <ul className="space-y-3">
                                        {['Personal Activities', 'Lunch', 'Entry Tickets'].map((item, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-stone-400">
                                                <XCircle size={16} className="text-stone-300 stroke-[1.5]" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Footer / Price Action */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-stone-100">
                                <div>
                                    <p className="text-xs text-stone-600 mb-1 uppercase tracking-wide">Total Estimation</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-2xl font-light text-stone-900">Contact Us</span>
                                        <span className="text-sm text-stone-600 font-light">for pricing</span>
                                    </div>
                                </div>
                                <Link href="https://wa.me/919560986669"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group/btn relative overflow-hidden rounded-xl bg-stone-900 px-8 py-3 transition-all hover:bg-stone-800">       
                                    <div className="relative z-10 flex items-center gap-2 text-white">
                                        <span className="text-sm font-medium">Reserve Seat</span>
                                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                    </div>
                                </Link> 
                            </div>

                        </div>
                    </div>
                </section>
                {/* DAYS LIST */}
                <main className="mx-auto mb-20 px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
                        {/* SIDEBAR: Elegant Vertical Timeline */}
                        <aside className="lg:col-span-4 relative">
                            <div className="lg:sticky lg:top-24">
                                <h3 className="text-xs font-bold tracking-[0.2em] text-stone-400 uppercase mb-6">
                                    Expedition Timeline
                                </h3>
                                <div className="relative border-l border-stone-200 ml-3 space-y-0">
                                    {data.days.map((d, index) => {
                                        const isActive = active === d.day;
                                        return (
                                            <div key={d.day} className="relative pl-8 pb-4 group">
                                                {/* Timeline Dot */}
                                                <div
                                                    className={`absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full border-2 transition-all duration-300 z-10 
                        ${isActive
                                                            ? 'bg-stone-900 border-stone-900 scale-125'
                                                            : 'bg-white border-stone-300 group-hover:border-stone-500'}`}
                                                ></div>

                                                {/* Clickable Area */}
                                                <button
                                                    onClick={() => setActive(d.day)}
                                                    className="text-left w-full focus:outline-none"
                                                >
                                                    <span className={`text-xs font-semibold tracking-wider uppercase block mb-1 transition-colors ${isActive ? 'text-stone-500' : 'text-stone-400'}`}>
                                                        Day {String(index + 1).padStart(2, '0')}
                                                    </span>
                                                    <h4 className={`text-lg font-serif transition-colors duration-300 ${isActive ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-700'}`}>
                                                        {d.title}
                                                    </h4>
                                                    <div className={`mt-2 flex items-center gap-2 text-xs transition-all duration-300 ${isActive ? 'text-teal-700 opacity-100' : 'text-stone-400 opacity-0 h-0 overflow-hidden'}`}>
                                                        <Clock size={12} />
                                                        <span>{d.night}</span>
                                                    </div>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT: Day Details & Booking */}
                        <section className="lg:col-span-8 flex flex-col gap-6">
                            {/* Day Details Card */}
                            <div className="bg-stone-50/50 rounded-3xl p-6 border border-stone-100">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="text-2xl font-serif text-stone-900 leading-tight">
                                            {activeDay.title}
                                        </h3>
                                    </div>
                                    <MapPin className="text-stone-400 hidden md:block" size={30} strokeWidth={1} />
                                </div>

                                <ul className="space-y-1">
                                    {activeDay.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-4 group">
                                            <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-stone-300 group-hover:bg-teal-600 transition-colors"></span>
                                            <p className="text-stone-700 text-md font-light leading-relaxed">
                                                {b}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* BOOKING SECTION: Grid Layout */}
                            <div>
                                <div className="flex items-center gap-6 mb-4">
                                    <span className="h-px flex-1 bg-stone-200"></span>
                                    <h4 className="text-sm font-bold tracking-widest text-stone-900 uppercase">
                                        Reservation Process
                                    </h4>
                                    <span className="h-px flex-1 bg-stone-200"></span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    {/* Step 1: Contact */}
                                    <div className="p-4 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors bg-white">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                                            <Phone size={18} />
                                        </div>
                                        <h5 className="font-semibold text-stone-900 mb-2">1. Initiate Contact</h5>
                                        <p className="text-sm text-stone-500 mb-3 leading-relaxed">
                                            Reach out via WhatsApp or Email to check availability.
                                        </p>
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium text-stone-800">+91 95609 86669</p>
                                            <a href="mailto:connect@umangliving.com" className="text-sm text-teal-700 hover:underline">connect@umangliving.com</a>
                                        </div>
                                    </div>

                                    {/* Step 2: Documents */}
                                    <div className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors bg-white">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                                            <FileText size={18} />
                                        </div>
                                        <h5 className="font-semibold text-stone-900 mb-2">2. Documentation</h5>
                                        <p className="text-sm text-stone-500 leading-relaxed">
                                            Submit a digital copy of your <span className="text-stone-900 font-medium">Aadhar Card</span> (Front & Back) to our team via Email or WhatsApp for verification.
                                        </p>
                                    </div>

                                    {/* Step 3: Payment */}
                                    <div className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors bg-white">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                                            <CreditCard size={18} />
                                        </div>
                                        <h5 className="font-semibold text-stone-900 mb-2">3. Secure Booking</h5>
                                        <p className="text-sm text-stone-500 leading-relaxed mb-2">
                                            Pay a token fee of <span className="text-stone-900 font-medium">₹10,000</span> to Umang SCL Pvt Ltd.
                                        </p>
                                        <p className="text-xs text-stone-400">Accepted: UPI, Paytm, GPay, Bank Transfer</p>
                                    </div>

                                    {/* Step 4: Finalize */}
                                    <div className="p-6 rounded-2xl border border-stone-200 hover:border-stone-300 transition-colors bg-white">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 mb-4">
                                            <Plane size={18} />
                                        </div>
                                        <h5 className="font-semibold text-stone-900 mb-2">4. Arrival Logistics</h5>
                                        <p className="text-sm text-stone-500 leading-relaxed">
                                            Let us handle your train/flight bookings. Balance payment is due prior to departure.
                                        </p>
                                    </div>

                                </div>

                                {/* CTA Button */}
                                <div className="mt-8 flex justify-end">
                                    <Link
                                        href="https://wa.me/919560986669"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-xl overflow-hidden transition-all hover:bg-stone-800 hover:shadow-lg hover:shadow-stone-900/20"
                                    >
                                        <span className="text-sm font-medium tracking-wide">Concierge Support</span>
                                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>

                        </section>
                    </div>
                </main>
            </div>
        </>
    );
}
