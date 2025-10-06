"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Since joining Umang Living, I feel more active and engaged than ever. The staff truly cares about our well being.  A truly talented and dedicated team, highly recommend them for anyone.",
    img: "/boy.png",
    name: "Mr. Suresh Jha",
    rating: 5,
  },
  {
    text: "It's reassuring to know that my parents are in good hands. The medical support and lifestyle activities keep them happy and healthy. Their attention to detail from the initial blueprints to the final.",
    img: "woman.png",
    name: "Mrs. Anita Singh",
    rating: 5,
  },
  {
    text: "Working with Umang Living to find our new family home was an exceptional experience. Their team's expertise in the local real estate market was invaluable, and they truly listened to our needs.",
    img: "man.png",
    name: "Mr. Ashok Garg",
    rating: 5,
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle responsiveness
  useEffect(() => {
    if (!isClient) return;

    const updateVisible = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, [isClient]);

  useEffect(() => {
    if (current + visible > testimonials.length) {
      setCurrent(Math.max(0, testimonials.length - visible));
    }
  }, [visible, current]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        const maxIndex = testimonials.length - visible;
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [visible]);

  const goTo = (index) => setCurrent(index);
  const maxIndex = Math.max(0, testimonials.length - visible);
  const totalDots = maxIndex + 1;

  if (!isClient) {
    return null; // prevent hydration mismatch
  }

  return (
    <section className="py-12 sm:py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Check what our Customers are Saying
        </h4>
        <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-6 md:mb-10">
          You can rely on our amazing features list and our customer services
          will be a great experience for you without doubt.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto md:px-4 px-8">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(current * 100) / visible}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="px-2 sm:px-3 flex-shrink-0"
                style={{
                  width: `${100 / visible}%`,
                }}
              >
                <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8 flex flex-col justify-between h-full">
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg md:text-lg flex-grow">
                    {t.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="ml-3 sm:ml-4 text-left">
                      <p className="text-gray-800 font-semibold uppercase text-md sm:text-md">
                        {t.name}
                      </p>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <FaStar
                            key={idx}
                            className={`w-3 h-3 sm:w-4 sm:h-4 ${
                              idx < t.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation */}
        {/* {totalDots > 1 && (
          <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${
                  current === i ? "bg-zinc-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        )} */}
      </div>
    </section>
  );
}
