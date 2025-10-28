import Banner from "../../components/Banner";
import Community from "../../components/Community";
import { seoData } from "../../lib/seoMeta";
import LegalServices from "@/app/components/services/LegalServices";

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

export default function LegalConsultation() {
  return (
    <>
      <Banner title={"Legal Consultation"} bgImage={"/banner/legal-banner.webp"}   />
      <div className="main_width relative overflow-hidden ">
      <LegalServices />
      </div>
      <Community />
    </>
  );
}
