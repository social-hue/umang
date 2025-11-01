import Banner from "../../components/Banner";
import Community from "../../components/Community";
import { seoData } from "../../lib/seoMeta";
import Image from "next/image";

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

export default function GeneralConsultation() {
  return (
    <>
      <Banner title={"General Consultation"} bgImage={"/citizen.jpg"}  />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/General.png" // replace with your image
          alt="Rangoli"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Personalized Support for Senior Living</h2>
        <p className="text-lg leading-relaxed">
        Sometimes, what seniors need most is simple, personalized guidance to make life easier and more fulfilling. Our general consultation services are designed to provide clear advice on everyday challenges—whether it’s choosing the right healthcare options, exploring lifestyle planning, or accessing community resources. We take the time to understand your personal circumstances, listen with empathy, and provide practical solutions that bring confidence and clarity. These sessions are not only informative but also reassuring, giving you the support you need to make decisions for a healthier, happier, and more independent life after 55.
        </p>
      </div>
    </section>       
        <Community />
      </div>
      {/* <Footer /> */}
    </>
  );
}
