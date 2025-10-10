"use client";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactGrid() {
  return (
    <div className="py-6 mt-4 w-full bg-white px-8 lg:px-16  2xl:py-12"> {/* Softer background color for the entire section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-teal-800 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="p-3 mb-4 rounded-full bg-teal-800 border-2 border-teal-800">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a 
                href="mailto:connect@umangliving.com" 
                className="text-lg text-gray-700 font-semibold hover:text-teal-800 transition duration-150"
              >
                connect@umangliving.com
              </a>
            </div>
          </div>

          {/* Location Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-teal-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="p-3 mb-4 rounded-full bg-teal-800 border-2 border-teal-800">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Office</h3>
              <p className="text-base text-gray-700">
                2319, Gold Wing, Wave one Tower, <br />
                Sector-18, Noida, UP-201301
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-teal-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="p-3 mb-4 rounded-full bg-teal-800 border-2 border-teal-800">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <div className="text-base text-gray-700 font-semibold">
                <a 
                  href="tel:01205109189" 
                  className="block hover:text-teal-800 transition duration-150"
                >
                  0120-510-9189
                </a>
                <a 
                  href="tel:+919560986669" 
                  className="block hover:text-teal-800 transition duration-150"
                >
                  +91 95609 86669
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}