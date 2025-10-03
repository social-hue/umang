import Timeline from "../components/about/Timeline";
import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Aboutus from "../components/project/about";
import Map from "../components/project/map";
import PropertySlider from "../components/PropertySlider";
import BecomeMemberForm from "../helpers/BecomeMemberForm";
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
      {/* <div className="py-8 ">
        <Header />
      </div> */}
      <Banner title={"Projects"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>
        <Aboutus />
        <Map />
        <div className="py-10">
          <div className="bg_green pb-4 main_width rounded-[11px] ">
            <div className="p-10  rounded-[11px]">
              <div>
                <h4 className="text-white  md:text-[35px] text-[30px] lg:leading-[50px]">
                  If you are an elderly and facing any property-related issue
                  anywhere in India, we are there to help you. Become a member
                  of Umang Living now, we are just a call away
                </h4>
                <p className="lg:text-[40px] md:text-[35px] text-[30px] lg:leading-[60px] text-white font-light">
                  <span className="yellow font-bold"> 9560986669</span> (Only
                  for members)
                </p>
              </div>
            </div>
          </div>
        </div>
        <BecomeMemberForm />
        <div className="py-10">
          <PropertySlider listings={data} />
        </div>
        <Community />
      </div>
      <Footer />
    </>
  );
}
