"use client";
import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { itineraries } from "@/app/StaticData/itineraries";
import { MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { CalendarDays, Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function AyodhyaTour() {
    const { slug } = useParams();
    const data = itineraries[slug];
    console.log(data);
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
                    <section className="mx-auto mt-6 mb-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden md:shadow-[0_4px_12px_rgba(0,0,0,0.05)] bg-white/60 md:backdrop-blur-lg md:border md:border-slate-200">
                        {/* Left Image Section */}
                        <div className="relative h-[280px] md:h-auto w-full rounded-2xl overflow-hidden">
                            <Image
                                src="/travel/banaras.webp"
                                alt="Delhi to Ayodhya Varanasi Road Trip"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700 ease-in-out"
                            /> 
                        </div>           
                        {/* Right Section */}
                        <div className="flex flex-col justify-between gap-6">
                            {/* Tour Schedule Card */}
                            <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-sky-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                                <div className="flex items-center justify-between mb-3">
                                    <h2 className="text-xl md:text-2xl font-semibold text-slate-800">Tour Schedule</h2>
                                    <span className="text-sm md:text-md bg-emerald-600 text-white px-3 py-1 rounded-full shadow-sm">Booking Open !</span>
                                </div>
                                <div className="flex items-center gap-6 text-slate-600 text-md md:text-base mb-3">
                                    <div className="flex items-center gap-2">
                                        <CalendarDays size={18} className="text-sky-500" />
                                        <span>6th December, 2025</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Sun size={18} className="text-yellow-500" />
                                        <span>7 Days</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Moon size={18} className="text-indigo-500" />
                                        <span>6 Nights</span>
                                    </div>
                                </div>
                                <hr className="my-3 border-slate-200" />
                                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold text-slate-800">Tour Cost</h3>
                                        <p className="text-md text-slate-600">Contact us for exclusive offers and pricing</p>
                                    </div>
                                    {/* <p className="text-3xl font-bold text-zinc-800 mt-2 sm:mt-0">INR 34,999</p>
                                    <p className="text-md text-slate-600 sm:ml-1">Per Person</p> */}
                                </div>
                            </div>
                            {/* Inclusion & Exclusion Section */}
                            <div className="grid md:grid-cols-2 gap-4 bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-sky-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
                                <div>
                                    <h4 className="font-semibold text-lg text-emerald-700 mb-2">Inclusions</h4>
                                    <ul className="space-y-1 text-slate-700 text-md">
                                        <li>6 Breakfast</li>
                                        <li>6 Dinner</li>
                                        <li>Transport</li>
                                        <li>Stay</li>
                                        <li>Sightseeing</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-rose-600 mb-2">Exclusions</h4>
                                    <ul className="space-y-1 text-slate-600 text-md">
                                        <li>Activities</li>
                                        <li>Lunch</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* DAYS LIST */}
                    <main className="grid grid-cols-1 mb-12 lg:grid-cols-3 gap-6">
                        <aside className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-4">
                            <h3 className="text-md text-slate-600 mb-3">Day-By-Day</h3>
                            <ol className="space-y-3">
                                {data.days.map((d) => (
                                    <li
                                        key={d.day}
                                        className={`p-3 rounded-xl cursor-pointer ${active === d.day
                                            ? "ring-2 ring-emerald-200 bg-emerald-50"
                                            : "hover:bg-slate-50"
                                            }`}
                                        onClick={() => setActive(d.day)}
                                    >
                                        <div className="font-medium">{d.title}</div>
                                        <div className="text-sm text-slate-600">
                                            Night: {d.night}
                                        </div>
                                    </li>
                                ))}
                            </ol>
                        </aside>

                        {/* MAIN DAY DETAILS */}
                        <section className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between">
                            {/* Dynamic Content */}
                            <div>
                                <h3 className="text-lg font-semibold text-slate-800">{activeDay.title}</h3>
                                <ul className="mt-4 space-y-2 text-md text-slate-700 leading-relaxed">
                                    {activeDay.bullets.map((b, i) => (
                                        <li key={i}>• {b}</li>
                                    ))}
                                </ul>

                                {/* How to Book Section */}
                                <div className="mt-4 border-t pt-3 border-zinc-300">
                                    <h4 className="text-md font-semibold text-orange-700 mb-3">How to Book?</h4>
                                    <ul className="space-y-2 text-md text-slate-700 leading-relaxed">
                                        <li>
                                            📞 Call / WhatsApp us on <span className="font-medium text-slate-900">1800 202 8704</span>,{" "}
                                            <span className="font-medium text-slate-900">+91 95609 86669</span> or email us at{" "}
                                            <a href="mailto:connect@umangliving.com" className="text-orange-700 hover:underline">
                                                connect@umangliving.com
                                            </a>{" "}
                                            to initiate your booking.
                                        </li>
                                        <li>
                                            🆔 Send a copy of your <span className="font-medium text-slate-900">Aadhar Card</span> (front and back) via email or WhatsApp.
                                        </li>
                                        <li>
                                            💰 Pay <span className="font-medium text-slate-900">INR 10000</span> as a ‘tour booking fee’ online in favour of{" "}
                                            <span className="font-medium text-slate-900">Umang SCL Private Limited</span>. Paytm, UPI, and GPay options available. Please call us for details.
                                        </li>
                                        <li>🧾 Pay the remaining amount before the tour departure date.</li>
                                        <li>
                                            ✈️ If you’d like us to arrange train/flight bookings from your hometown, please pay the approximate amount at booking time. The remaining will be adjusted with your balance payment. Contact us for details.
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Fixed Buttons */}
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="https://docs.google.com/forms/d/e/1FAIpQLSfIQ8Es5VM963znGpu11ADPhyQVC_8HjY7IRjbqBjF9AEHptw/viewform"
                                    target="_main"
                                    className="text-center flex-1 bg-gradient-to-r from-orange-600 to-red-700 text-white py-2.5 rounded-lg font-medium text-md shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                                >
                                    Book Today
                                </Link>
                            </div>
                        </section>
                    </main>
            </div>
        </>
    );
}
