import Banner from "../components/Banner";
import Community from "../components/Community";
import { seoData } from "../lib/seoMeta";
import CharDhamSection from "@/app/components/CharDhamSection";

export const generateMetadata = () => {
  const meta = seoData.travel;

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

export default function Travel() {
  return (
    <>
      <Banner title={"Travel"} bgImage={"/travel-page1.jpg"} />
      <div className="main_width py-8 relative overflow-hidden">
        <CharDhamSection />
      </div>
      <Community />
    </>
  );
}
