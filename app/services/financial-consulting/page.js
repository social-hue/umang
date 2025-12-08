import FinancialServices from "@/app/components/services/FinancialServices";
import Community from "@/app/components/Community";
import { seoData } from "@/app/lib/seoMeta";

export const generateMetadata = () => {
  const meta = seoData.finance;

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
      {/* <Banner title={"Financial Consulting"} bgImage={"/banner/finance-banner.webp"}  /> */}
      <div className="relative overflow-hidden">
      <FinancialServices />
      </div>
    </>
  );
}
