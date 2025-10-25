import Banner from "../components/Banner";
import Community from "../components/Community";
import Grid from "../components/contact/Grid";
import ContactGrid from "../components/contact/officeDetails";
// import Footer from "../components/Footer";
import { seoData } from "../lib/seoMeta";

export const generateMetadata = () => {
  const meta = seoData.contact;

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

export default function Contact() {
  return (
    <>
      <Banner title={"Connect with Us"} bgImage={"/consultation.jpg"} />
      <div className=" relative overflow-hidden ">
        <Grid />
        <ContactGrid />
        <Community />
      </div>
    </>
  );
}
