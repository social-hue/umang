import Image from "next/image";
import Banner from "../../components/Banner";
import Community from "../../components/Community";
// import Footer from "../../components/Footer";
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

export default function HealingServices() {
  return (
    <>
      <Banner title={"Healing Services"} bgImage={"/healing-bannerr.png"}   />
      <div className="relative overflow-hidden ">
      {/* <div className="p-2 bg-red-700 text-center text-white text-xl md:text-[22px] font-semibold">Our Healing Services are launching on 1 November, 2025 </div> */}

      <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Healing.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Holistic Wellness for Mind and Body</h2>
        <p className="text-lg leading-relaxed">
        True well-being goes beyond medical care—it includes nurturing your body, mind, and spirit. Our healing services combine traditional and modern approaches to support holistic senior health. From yoga and meditation sessions that bring calmness and balance, to physiotherapy that enhances mobility and relieves pain, we offer a wide range of programs designed to meet your unique needs. We also include alternative therapies, relaxation practices, and group wellness activities that build resilience and positivity. These services are thoughtfully structured to reduce stress, promote active living, and enhance the overall quality of life, ensuring you enjoy your golden years with renewed energy and vitality.
        </p>
      </div>
    </section>             
        <Community />
      </div>
      {/* <Footer /> */}
    </>
  );
}
