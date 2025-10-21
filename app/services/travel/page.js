// import Banner from "../../components/Banner";
// import Community from "../../components/Community";
// import Footer from "../../components/Footer";
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
//       <Banner title={"Travel"} bgImage={"/travel-page1.jpg"} />
//       <div className="main_width py-8 relative overflow-hidden">
//         <CharDhamSection />
//       </div>
//       <Community />
//       <Footer />
//     </>
//   );
// }


import Image from "next/image";
import Banner from "../../components/Banner";
import Community from "../../components/Community";
import Footer from "../../components/Footer";
import { seoData } from "../../lib/seoMeta";

export const generateMetadata = () => {
  const meta = seoData.aboutUs;

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
      <Banner title={"Travel"} bgImage={"/citizen.jpg"}   />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
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
        <h2 className="text-2xl font-bold mb-4">Stress-Free Travel for Seniors 55+</h2>
        <p className="text-lg leading-relaxed">
        Traveling in your golden years should be exciting, enriching, and above all—stress-free. That’s why we organize senior-friendly tours and experiences tailored to the unique needs of older adults. From serene weekend getaways to spiritual pilgrimages and curated heritage tours, each trip prioritizes safety, comfort, and accessibility. Our dedicated travel coordinators ensure proper planning, comfortable transport, senior-friendly accommodations, and on-trip assistance so that you can enjoy every journey without worry. These experiences not only help you discover new destinations but also foster connections with fellow travelers who share your zest for life.
        </p>
      </div>
    </section>             
        <Community />
      </div>
      <Footer />
    </>
  );
}
