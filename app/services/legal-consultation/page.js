// import Banner from "../../components/Banner";
// import Community from "../../components/Community";
// import { seoData } from "../../lib/seoMeta";
// import LegalServices from "@/app/components/services/LegalServices";

// export const generateMetadata = () => {
//   const meta = seoData.aboutUs;

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

// export default function LegalConsultation() {
//   return (
//     <>
//       <Banner title={"Legal Consultation"} bgImage={"/banner/legal-banner.webp"}   />
//       <div className="main_width relative overflow-hidden ">
//       <LegalServices />
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
  const meta = seoData.legal;

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

export default function LegalConsultation() {
  return (
    <>
      <Banner title={"Legal Consultation"} bgImage={"/banner/legal-banner.webp"}   />
      <div className="relative flex justify-center">
      <Image
          src="/coming-soon1.png" // replace with your image
          alt="Rangoli"
          width={140}
          height={80}
        />
      </div>
      <div className="main_width relative overflow-hidden">
      {/* <div className="p-2 bg-red-700 text-center text-white text-xl md:text-[22px] font-semibold">Our Legal Consultation Services are launching on 10 November, 2025 </div> */}
        <section className="mb-16 md:mx-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Legal.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-zinc-800">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted Legal Guidance for Seniors</h2>
        <p className="text-lg leading-relaxed">
        Legal matters can often feel overwhelming, especially when it comes to property, inheritance, or retirement-related documentation. Our trusted legal advisors specialize in assisting seniors with clarity and compassion. Whether you are preparing a will, managing property transfers, or navigating complex paperwork, we ensure the process is transparent, secure, and stress-free. Our consultations are designed to empower you with knowledge and peace of mind, helping you make informed decisions to protect your rights and secure your legacy. With professional guidance just a step away, you can rest assured knowing your legal affairs are in safe hands.
        </p>
      </div>
    </section>          
      </div>
      <Community />
    </>
  );
}