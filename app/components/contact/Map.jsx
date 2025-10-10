import React from "react";

const Map = () => {
  return (
    <div className="container mx-auto mb-6">
        <div className="mx-6 md:mx-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.000107519878!2d77.32041557613556!3d28.569759486927314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f4d1b2ae1%3A0xf49003c135d1f106!2sWave%20One%20Noida!5e0!3m2!1sen!2sin!4v1751356949631!5m2!1sen!2sin"
            width="100%"
            height="450"
            className="rounded-[10px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
    </div>
  );
};

export default Map;
