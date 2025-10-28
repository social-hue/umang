import Founder from "../components/about/Founder";
import Banner from "../components/Banner";
import Community from "../components/Community";
import FounderMessage from "../components/FounderMessage";
import TeamSection from "../components/team/TeamSection";
import MissionVision from "../components/vision/MissionVision";
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
  return (
    <>
      <Banner title={"About us"} bgImage={"/banner/about-banner1.webp"} />
      <FounderMessage/>
      <Founder />
      <MissionVision />
      <TeamSection />
      <Community />
    </>
  );
}
