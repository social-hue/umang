"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <section className="main_width py-8 md:py-16 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-6 md:mb-8"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-800 mb-2">
          Get in touch with us
        </h1>
        <p className="text-lg text-zinc-800 max-w-2xl mx-auto">
          We're here to help you connect, collaborate, and grow with Umang Living.
        </p>
      </motion.div>


      {/* *****************************
            NEW LAYOUT
            3-COLUMN DETAILS ABOVE
            FULL-WIDTH MAP BELOW
      ****************************** */}

      {/* Contact Details - 3 Columns */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-6 bg-white p-6"
      >

        {/* Email */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Mail className="text-teal-700 w-6 h-6 stroke-[2.5]" />
            <h3 className="text-md font-semibold text-zinc-800">Email Us</h3>
          </div>
          <p className="text-md text-zinc-800 ml-9">
            <a
              href="mailto:connect@umangliving.com"
              className="hover:text-teal-900 text-teal-700"
            >
              connect@umangliving.com
            </a>
          </p>
        </div>

        {/* Office Address */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <MapPin className="text-teal-700 w-6 h-6 stroke-[2.5]" />
            <h3 className="text-md font-semibold text-zinc-800">
              Our Office{" "}
              <span className="text-zinc-800 text-md">
                | 10:00 AM - 6:00 PM (Mon - Sat)
              </span>
            </h3>
          </div>
          <p className="text-md text-zinc-800 ml-9 leading-relaxed">
            2319, Gold Wing, Wave One Tower, <br />
            Sector-18, Noida, UP-201301
          </p>
        </div>

        {/* Phone */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Phone className="text-teal-700 w-6 h-6 stroke-[2.5]" />
            <h3 className="text-md font-semibold text-zinc-800">
              Call Us{" "}
              <span className="text-zinc-800 text-md">
                | 10:00 AM - 6:00 PM (IST) | Mon - Sat
              </span>
            </h3>
          </div>
          <p className="text-md text-zinc-800 ml-9 leading-relaxed">
            <a href="tel:01205109189" className="text-teal-700 hover:text-teal-900">
              0120-510-9189
            </a>
            ,{" "}
            <a href="tel:+919560986669" className="text-teal-700 hover:text-teal-900">
              +91 95609 86669
            </a>
          </p>
        </div>

      </motion.div>


      {/* Full-Width Map Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.000107519878!2d77.32041557613556!3d28.569759486927314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f4d1b2ae1%3A0xf49003c135d1f106!2sWave%20One%20Noida!5e0!3m2!1sen!2sin!4v1751356949631!5m2!1sen!2sin"
          width="100%"
          height="100%"
          className="rounded-xl border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

    </section>
  );
}
