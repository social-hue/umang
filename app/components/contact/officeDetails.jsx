"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactGrid() {
  return (
    <section className="w-full bg-[#f9f9f9] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-14">
        {/* LEFT SIDE - MAP (60%) */}
        <div className="w-full md:w-[60%] h-[400px] md:h-[450px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.000107519878!2d77.32041557613556!3d28.569759486927314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f4d1b2ae1%3A0xf49003c135d1f106!2sWave%20One%20Noida!5e0!3m2!1sen!2sin!4v1751356949631!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="rounded-[4px] shadow-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* RIGHT SIDE - DETAILS (40%) */}
        <div className="w-full md:w-[40%] flex flex-col justify-center gap-6 text-gray-800 h-full">
          <div>
            <h2 className="text-2xl md:text-2xl font-semibold text-zinc-800 flex items-center gap-2 mb-1">
              <Mail className="w-6 h-6 mr-1 stroke-[3] text-zinc-800" /> Email Us
            </h2>
            <p className="text-lg text-gray-700 ml-9">connect@umangliving.com</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-2xl font-semibold text-zinc-800 flex items-center gap-2 mb-1">
              <MapPin className="w-6 h-6 mr-1 stroke-[3] text-zinc-800" /> Our Office
            </h2>
            <p className="text-lg text-gray-700 ml-9 leading-relaxed">
              2319, Gold Wing, Wave One Tower, <br />
              Sector-18, Noida, UP-201301
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-2xl font-semibold text-zinc-800 flex items-center gap-2 mb-1">
              <Phone className="w-6 h-6 mr-1 stroke-[3] text-zinc-800" /> Call Us
            </h2>
            <div className="ml-9 space-y-1 text-lg text-gray-700">
              <p>0120-510-9189, +91 95609 86669</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
