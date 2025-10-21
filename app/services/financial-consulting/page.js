import Banner from "../../components/Banner";
import Community from "../../components/Community";
import Footer from "../../components/Footer";
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

export default function FinancialConsulting() {
  return (
    <>
      <Banner title={"Financial Consulting"} bgImage={"/citizen.jpg"}  />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative h-64 md:h-80">
        <Image
          src="/services/Financial.jpg" // replace with your image
          alt="Finance"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Financial Consulting for a Secure Tomorrow</h2>
        <p className="text-lg leading-relaxed">
        Our financial consulting service is designed to help senior citizens plan, protect, and grow their wealth with confidence. We offer personalized guidance on managing savings, investments, pensions, and estate planning, ensuring financial independence and peace of mind in every stage of life. With expert advisors who understand the unique needs of seniors, we help you make informed decisions for a stable and worry-free future.
        </p>
      </div>
    </section>       
        <Community />
      </div>
      <Footer />
    </>
  );
}
