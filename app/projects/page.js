import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Map from "../components/project/map";
import PropertySlider from "../components/PropertySlider";
import { seoData } from "../lib/seoMeta";
import { data } from "../StaticData/Property";

export const generateMetadata = () => {
  const meta = seoData.projects;
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

export default function Projects() {
  return (
    <>
      <Banner title={"Projects"} bgImage={"/something3.jpg"} />
      <div className="relative overflow-hidden ">
        <Map />
        <div className="py-6">
          <PropertySlider listings={data} />
        </div>
        <Community />
      </div>
      <Footer />
    </>
  );
}
