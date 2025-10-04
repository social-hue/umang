// import Aboutus from "../components/about/Aboutus";
// import Timeline from "../components/about/Timeline";
import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
import FounderMessage from "../components/FounderMessage";
// import Header from "../components/Header";
import { seoData } from "../lib/seoMeta";

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

export default function About() {
  const memberContent = `With over 25 years of leadership in the hospitality industry, Mr. Sanjayy Bharadwajj knows how to make people feel truly at home. With a rare mix of strategic smarts and a deep love for crafting meaningful experiences, Mr. Bharadwajj has spent his career decoding what makes places come alive and people smile.<br/><br/>

From market research to lifestyle design, he&apos;s worn many hats, always guided by a keen understanding of human behaviour and an eye for comfort, joy & connection.
Now, he&apos;s pouring all that wisdom into a new venture close to his heart: Umang Living - India&apos;s first multi-city independent senior living community. Thoughtfully created to offer vibrant, dignified, and holistic living for the elderly, Umang is not about slowing down, it&apos;s about living fully, joyfully and on your own terms.<br/><br/>

With Umang Living, Mr. Bharadwajj hopes to do more than build beautiful residences - he wants to build a community where every day brings companionship, purpose, and a strong cup of chai.`;
  return (
    <>
      {/* <div className="py-8 ">
        <Header />
      </div> */}
      <Banner title={"About us"} />
      <div className="relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" loading="lazy" decoding="async" className="w-[70%]"/>
        </div>
        {/* <Aboutus /> */}
     
        <FounderMessage/>
        
        {/* <Timeline /> */}
        {/* <div className="py-0">
          <div className="bg_green pb-4 main_width rounded-[11px] ">
            <div className="p-6 bg_red rounded-[11px]">
              <div>
                <h4 className="yellow xl:text-[50px] lg:text-[40px] md:text-[30px] sm:text-[25px] text-[20px]">
                  Our Vision & Mission
                </h4>
                <p className="text-white lg:text-[50px] md:text-[40px] sm:text-[30px] text-[25px] font-light lg:leading-[72px]">
                  Creating spaces where growing older means living fuller.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <Community />
      </div>
      <Footer />
    </>
  );
}
