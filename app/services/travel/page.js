// import Banner from "../../components/Banner";
// import Community from "../../components/Community";
// import { seoData } from "../../lib/seoMeta";
// import CharDhamSection from "@/app/components/CharDhamSection";

// export const generateMetadata = () => {
//   const meta = seoData.travel;

//   return {
//     title: meta.title,
//     description: meta.description,
//     metadataBase: new URL(meta.url),
//     alternates: {
//       canonical: meta.canonical,
//     },
//     openGraph: {
//       title: meta.title,
//       description: meta.description,
//       url: meta.url,
//       type: meta.type,
//       siteName: meta.siteName,
//       images: [
//         {
//           url: meta.image,
//           width: 1200,
//           height: 630,
//           alt: meta.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: meta.title,
//       description: meta.description,
//       site: "@umangliving",
//       creator: "@umangliving",
//       images: [meta.image],
//     },
//     keywords: meta.keywords.split(",").map((kw) => kw.trim()), // array of keywords
//   };
// };

// export default function Travel() {
//   return (
//     <>
//       <Banner title={"Travel"} bgImage={"/banner/travel-banner.webp"} />
//       <div className="main_width py-8 relative overflow-hidden">
//         <CharDhamSection />
//       </div>
//       <Community />
//     </>
//   );
// }

import Image from "next/image";
import Banner from "../../components/Banner";
import Community from "../../components/Community";
import { seoData } from "../../lib/seoMeta";

export const generateMetadata = () => {
  const meta = seoData.travel;

  return {
    title: meta.title,
    description: meta.description,
    metadataBase: new URL(meta.url),
    alternates: {
      canonical: meta.canonical,
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: meta.url,
      type: meta.type,
      siteName: meta.siteName,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      site: "@umangliving",
      creator: "@umangliving",
      images: [meta.image],
    },
    keywords: meta.keywords.split(",").map((kw) => kw.trim()), // array of keywords
  };
};

export default function Travel() {
  return (
    <>
      <Banner title={"Travel"} bgImage={"/banner/travel-banner.webp"} />
      <div className="relative flex justify-center">
      <Image
          src="/coming-soon1.png" // replace with your image
          alt="Rangoli"
          width={140}
          height={80}
        />
      </div>
      <div className="main_width relative overflow-hidden">
      {/* <div className="p-2 bg-red-700 text-center text-white text-xl md:text-2xl font-semibold">Our Travel Services are launching on 10 November, 2025 </div> */}
        <section className="mb-16 md:mx-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Travel.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stress-Free Travel for Seniors 55+</h2>
        <p className="text-lg leading-relaxed">
        Traveling in your golden years should be exciting, enriching, and above all—stress-free. That’s why we organize senior-friendly tours and experiences tailored to the unique needs of older adults. From serene weekend getaways to spiritual pilgrimages and curated heritage tours, each trip prioritizes safety, comfort, and accessibility. Our dedicated travel coordinators ensure proper planning, comfortable transport, senior-friendly accommodations, and on-trip assistance so that you can enjoy every journey without worry. These experiences not only help you discover new destinations but also foster connections with fellow travelers who share your zest for life.
        </p>
      </div>
    </section>             
      </div>
      <Community />
      {/* <Footer /> */}
    </>
  );
}
