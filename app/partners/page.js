import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Aboutus from "../components/partner/about";
import Button from "../components/partner/Button";
import GridCols from "../components/partner/GridCols";
import { seoData } from "../lib/seoMeta";
import { data } from "../StaticData/partner";

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
      {/* <div className="py-8 ">
        <Header />
      </div> */}
      <Banner title={"Partner With Us"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <Aboutus />

        <div className=" main_width mt-10">
          {data.map((data, index) => (
            <GridCols
              key={index}
              img={data.img}
              order1={data.order1}
              order2={data.order2}
              type={data.type}
              dis={data.dis}
              cont1={data.cont1}
              cont2={data.cont2}
              id={data.id}
            />
          ))}
        </div>
        <Community />
      </div>
      <Footer />
    </>
  );
}
