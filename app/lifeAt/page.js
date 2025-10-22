import Banner from "../components/Banner";
// import Footer from "../components/Footer";
import Aboutus from "../components/lifeat/about";
import GridCards from "../components/lifeat/GridCards";
import { seoData } from "../lib/seoMeta";
import { data } from "../StaticData/liferat";

export const generateMetadata = () => {
  const meta = seoData.lifeAt;

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

export default function Life() {
  return (
    <>
      <Banner title={"Life at Umang"} bgImage={"/something1.jpg"} />
      <div className="relative overflow-hidden">
        <Aboutus />
        <div className="main_width">
          <h2 className="text-[#535353] lg:text-4xl text-3xl font-bold">
            Our Services & Experiences
          </h2>
        </div>
        <div className="py-4 md:py-10 mb-6">
          {data.map((data, index) => (
            <GridCards
              key={index}
              order1={data.order1}
              order2={data.order2}
              dis={data.dis}
              cont1={data.cont1}
              img={data.img}
            />
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
