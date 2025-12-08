"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function ImageGallery() {
  const [index, setIndex] = useState(-1);

  const photos = [
    "/award.jpeg",
    "/award3.jpeg",
    "/Certificate.png",
    "/award2.jpeg",
  ];

  return (
    <div className="py-8 md:py-0 md:pb-16 main_width">
    <h2 className="text-3xl md:text-[36px] text-zinc-800 font-bold mb-3 leading-tight text-center md:text-left">
      Achievements & Certificates
    </h2>
    <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 py-2 items-center">
      {photos.map((img, i) => (
        <div
          key={i}
          className="w-[80%] sm:w-[300px] bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:scale-[1.04] transition"
          onClick={() => setIndex(i)}
        >
          <img
            src={img}
            alt=""
            className="w-full h-48 object-cover"
          />
        </div>
      ))}
    </div>

    <Lightbox
      open={index >= 0}
      index={index}
      close={() => setIndex(-1)}
      slides={photos.map((src) => ({ src }))}
      plugins={[Thumbnails]}
    />
  </div>
  );
}


