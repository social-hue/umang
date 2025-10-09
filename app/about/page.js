// import Aboutus from "../components/about/Aboutus";
// import Timeline from "../components/about/Timeline";
import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
import FounderMessage from "../components/FounderMessage";
import TeamSection from "../components/team/TeamSection";
import MissionVision from "../components/vision/MissionVision";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Header from "../components/Header";
import { seoData } from "../lib/seoMeta";

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

export default function About() {
  const memberContent = `With over 25 years of leadership in the hospitality industry, Mr. Sanjayy Bharadwajj knows how to make people feel truly at home. With a rare mix of strategic smarts and a deep love for crafting meaningful experiences, Mr. Bharadwajj has spent his career decoding what makes places come alive and people smile.<br/><br/>

From market research to lifestyle design, he&apos;s worn many hats, always guided by a keen understanding of human behaviour and an eye for comfort, joy & connection.
Now, he&apos;s pouring all that wisdom into a new venture close to his heart: Umang Living - India&apos;s first multi-city independent senior living community. Thoughtfully created to offer vibrant, dignified, and holistic living for the elderly, Umang is not about slowing down, it&apos;s about living fully, joyfully and on your own terms.<br/><br/>

With Umang Living, Mr. Bharadwajj hopes to do more than build beautiful residences - he wants to build a community where every day brings companionship, purpose, and a strong cup of chai.`;
  return (
    <>
      {/* <div className="py-8 ">
        <Header />
      </div> */}
      <Banner title={"About us"} bgImage={"/blog_image.jpg"} />
      <div className="relative overflow-hidden">
        {/* <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" loading="lazy" decoding="async" className="w-[70%]"/>
        </div> */}
        {/* <Aboutus /> */}
     
        <FounderMessage/>
        
        {/* <Timeline /> */}
        <MissionVision />
        <TeamSection />
        <Community />
      </div>
      <Footer />
    </>
  );
}
