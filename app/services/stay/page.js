import Image from "next/image";
import Banner from "../../components/Banner";
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
      <Banner title={"Stay"} bgImage={"/citizen.jpg"} />
      <div className="relative overflow-hidden">
        <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
          {/* Left: Image */}
          <div className="w-full md:w-1/2 relative h-64 md:h-80">
            <Image
              src="/services/Stay.png"
              alt="Rangoli"
              fill
              className="object-cover rounded-xl"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Comfortable and Secure Senior Stays</h2>
            <p className="text-md leading-relaxed">
              Whether you are looking for a short-term stay, a seasonal break, or a long-term home, our senior stays are designed to provide maximum comfort, security, and peace of mind. Each accommodation blends modern convenience with homelike warmth, offering fully furnished rooms, nutritious meals, and attentive housekeeping. For those who require additional assistance, we also provide personalized care and support while ensuring dignity and independence are respected at all times. Our goal is to make every stay worry-free for both residents and their families, so you can focus on living joyfully without the stress of managing daily routines.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
