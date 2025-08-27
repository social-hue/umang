import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Life at Umang "} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <Aboutus />
        <div className="main_width pb-10">
          <h2 className="text-[#535353] lg:text-[45px] md:text-[35px] text-[30px] font-semibold">
            Our Services & Experiences
          </h2>
          <div className="grid lg:grid-cols-2 gap-10 mt-4">
            <div>
              <img
                src="/lifeAt/lifrat1.jpg"
                alt="lifeat"
                className="w-full md:h-[400px] object-cover rounded-[30px]"
              />
              <div className="2xl:mt-10">
                <h4 className="green 2xl:text-[120px] xl:text-[80px] text-[60px] font-semibold">
                  01
                </h4>
                <p className="text-[#B41F56] xl:text-[45px] lg:text-[35px] md:text-[30px] text-[25px] font-semibold">
                  Food Services — Nutritious, Homely, Delicious
                </p>
                <p className="text-[#535353] lg:text-[24px] md:text-[20px] text-[18px] lg:leading-[32px]">
                  Why eat out when every meal feels like home? Our in-house
                  kitchen serves wholesome, flavorful meals tailored to senior
                  health and taste preferences. From hearty thalis to light
                  bites, we make dining a daily delight—convenient, nutritious,
                  and always satisfying.
                </p>
              </div>
            </div>
            <div className="lg:block hidden">
              <img
                src="/lifeAt/lifrat2.jpg"
                alt="lifeat"
                className="w-full  object-cover rounded-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="main_width pb-10">
          {data.map((data, index) => (
            <GridCards
              key={index}
              order1={data.order1}
              order2={data.order2}
              dis={data.dis}
              cont1={data.cont1}
              head={data.head}
              img={data.img}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
