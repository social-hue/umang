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

export default function Townships() {
  return (
    <>
      <Banner title={"Township"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <section className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Township.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Communities Designed for Senior Living</h2>
        <p className="text-lg leading-relaxed">
        Our senior living townships are carefully designed to create a safe, vibrant, and inclusive environment where every resident feels at home. These communities go beyond just housing—they are thoughtfully planned with landscaped gardens, walking paths, recreation areas, wellness centers, and dining facilities, all tailored to the needs of those over 55. Here, you can enjoy your independence while knowing that round-the-clock assistance is always available if needed. Surrounded by like-minded neighbors and a warm, caring atmosphere, our townships make it easier to build friendships, share experiences, and truly celebrate this new chapter of life.
        </p>
      </div>
    </section>              
        <Community />
      </div>
      <Footer />
    </>
  );
}
