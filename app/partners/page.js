// "use client"
import Banner from "../components/Banner";
// import Community from "../components/Community";
import Footer from "../components/Footer";
// import Header from "../components/Header";
// import Aboutus from "../components/partner/about";
import Button from "../components/partner/Button";
import GridCols from "../components/partner/GridCols";
import { seoData } from "../lib/seoMeta";
import { data } from "../StaticData/partner";

export const generateMetadata = () => {
  const meta = seoData.partners;

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

export default function Partners() {
  return (
    <>
      {/* <div className="py-8 ">
        <Header />
      </div> */}
      <Banner title={"Partner with Us"} bgImage={"/handshake.jpg"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        {/* <Aboutus /> */}

        <div className="main_width py-8">
        <h1 className="text-4xl md:text-5xl font-semibold text-teal-800 mb-4 text-left">
            Why Partner with us ?
        </h1>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed"> 
         At Umang Living, we take a holistic partnership approach to creating exceptional senior living communities. Our Senior-Friendly Design Support ensures every space is thoughtfully crafted for comfort, safety, and independence. Through our Strategic Marketing & Sales Expertise, we help drive awareness, generate quality leads, and ensure a seamless experience for every homebuyer. Once the community comes to life, our Dedicated Community Operations uphold Umang Living’s promise of care, wellness, and active living, ensuring long-term happiness and peace of mind for every resident and partner.
        </p>
        <div className="mt-4"><Button/></div>
        </div>
        {/* <Community /> */}
      </div>
      <Footer />
    </>
  );
}
