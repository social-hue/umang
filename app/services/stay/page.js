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

export default function Stay() {
  return (
    <>
      <Banner title={"Stay"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <section className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-2xl shadow">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Stay.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Comfortable and Secure Senior Stays</h2>
        <p className="text-lg leading-relaxed">
        Whether you are looking for a short-term stay, a seasonal break, or a long-term home, our senior stays are designed to provide maximum comfort, security, and peace of mind. Each accommodation blends modern convenience with homelike warmth, offering fully furnished rooms, nutritious meals, and attentive housekeeping. For those who require additional assistance, we also provide personalized care and support while ensuring dignity and independence are respected at all times. Our goal is to make every stay worry-free for both residents and their families, so you can focus on living joyfully without the stress of managing daily routines.
        </p>
      </div>
    </section>             
        <Community />
      </div>
      <Footer />
    </>
  );
}
