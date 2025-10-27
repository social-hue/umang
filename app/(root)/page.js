import Banner from "../components/Home/Banner/Banner";
import Living from "../components/Home/UmangLiving/Living";
import Community from "../components/Community";
import { seoData } from "../lib/seoMeta";
import FAQSection from "../components/faq/FAQSection";
import Testimonial from "../components/testimonials/testimonials";

export const generateMetadata = () => {
  const meta = seoData.home;
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
    keywords: meta.keywords.split(",").map((kw) => kw.trim()),
  };
};

export default function Home() {
  return (
    <>
      <Banner />
      <Living />
      <Testimonial />
      <FAQSection />
      <Community />
    </>
  );
}
