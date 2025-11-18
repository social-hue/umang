import Banner from "../components/Banner";
import Community from "../components/Community";
import PartnerPage from "../components/partner/about";
import { seoData } from "../lib/seoMeta";

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
      <Banner title={"Partner with Us"} bgImage={"/banner/partner-banner-3.webp"} />
      <div className="main_width relative overflow-hidden">
      <PartnerPage />
      </div>
      <Community />
    </>
  );
}
