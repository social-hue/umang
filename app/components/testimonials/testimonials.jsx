"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    text: "Since joining Umang Living, I feel more active and engaged than ever. The staff truly cares about our well being.  A truly talented and dedicated team, highly recommend them for anyone.",
    img: "/boy.png",
    name: "Mr. Suresh Jha",
    rating: 4,
  },
  {
    text: "It's reassuring to know that my parents are in good hands. The medical support and lifestyle activities keep them happy and healthy. Their attention to detail from the initial blueprints to the final.",
    img: "woman.png",
    name: "Mrs. Anita Singh",
    rating: 4,
  },
  {
    text: "Working with Umang Living to find our new family home was an exceptional experience. Their team's expertise in the local real estate market was invaluable, and they truly listened to our needs.",
    img: "man.png",
    name: "Mr. Ashok Garg",
    rating: 5,
  },
  {
    text: "We entrusted Umang Living with both selling our old property and purchasing a new one, and they handled everything seamlessly. Their knowledge of the market and negotiation skills were top-notch.",
    img: "boy.png",
    name: "Mr. Sachin Goyal",
    rating: 4,
  },
  // {
  //   text: "hey ther",
  //   img: "https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/testimonial/2.jpg",
  //   name: "Sarah Lee",
  //   rating: 5,
  // },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side mounting
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

  // Reset current index when visible count changes
  useEffect(() => {
    if (current + visible > testimonials.length) {
      setCurrent(Math.max(0, testimonials.length - visible));
    }
  }, [visible, current]);

  // Auto-slide every 5s
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

  // Don't render until client-side to avoid hydration issues
  if (!isClient) {
    return (
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h4 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
            Check what our Customers are Saying
          </h4>
          <p className="text-gray-500 max-w-2xl mx-auto">
            You can rely on our amazing features list and our customer services
            will be a great experience for you without doubt.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h4 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Check what our Customers are Saying 
        </h4>
        <p className="text-lg text-zinc-800 max-w-2xl mx-auto mb-10">
          You can rely on our amazing features list and our customer services
          will be a great experience for you without doubt.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative max-w-6xl mx-auto px-6">
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
                className={`px-3 flex-shrink-0`}
                style={{
                  width: `${100 / visible}%`,
                }}
              >
                {/* * The change is here:
                  * Replaced 'min-h-[280px]' with 'h-60' for a fixed, shorter height.
                  * The `flex-grow` on the paragraph will ensure it takes up
                  * the remaining space in the fixed-height container.
                */}
                <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 h-60 flex flex-col justify-between">
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                    {t.text}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="ml-4 text-left">
                      <h6 className="text-gray-800 font-semibold uppercase text-xs md:text-sm">
                        {t.name}
                      </h6>
                      <div className="flex mt-1">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <FaStar
                            key={idx}
                            className={`w-3 h-3 md:w-4 md:h-4 ${
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

        {/* Navigation Arrows */}
        {/* {maxIndex > 0 && (
          <>
            <button
              onClick={() => setCurrent(current > 0 ? current - 1 : maxIndex)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => setCurrent(current < maxIndex ? current + 1 : 0)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )} */}

        {/* Dots Navigation */}
        {totalDots > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  current === i ? "bg-zinc-700" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}