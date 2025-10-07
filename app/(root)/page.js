import Banner from "../components/Home/Banner/Banner";
// import About from "../components/Home/About/about";
// import FounderMessage from "../components/FounderMessage";
// import floatingButton from "../components/floatingButton/floatingButton";
import Living from "../components/Home/UmangLiving/Living";
// import Glimps from "../components/Home/Glimps/Glimps";
import Community from "../components/Community";
import Footer from "../components/Footer";
import { seoData } from "../lib/seoMeta";
// import Aboutus from "../components/about/Aboutus";
import FAQSection from "../components/faq/FAQSection";
import Testimonial from "../components/testimonials/testimonials";
// import FloatingCTA from "../components/floatingButton/floatingButton";
// import Testimonial from "../components/testimonials/Testimonial";
// import TestimonialsSection from "../components/TestimonialsSection";

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
    keywords: meta.keywords.split(",").map((kw) => kw.trim()), // array of keywords
  };
};

export default function Home() {
  // const memberContent = `Over the years, I’ve seen how loneliness quietly steals joy from
  //               the lives of our elders—even those surrounded by family. I’ve
  //               felt that pain closely, watching loved ones grow silent,
  //               distant, and forgotten. It broke something in me. How could
  //               people who once gave us everything be left with so little—no
  //               companionship, no purpose, no joy? That heartbreak stayed with
  //               me. For two years, I poured my heart into researching, dreaming,
  //               and building Umang Living—a warm, vibrant space where seniors
  //               can live with dignity, surrounded by friends, laughter, and
  //               meaningful moments. Umang is my way of giving back—a sanctuary
  //               where the elderly are not just cared for, but celebrated.`;
  return (
    <>
      <Banner />
      {/* <Aboutus /> */}
      {/* <div className="py-10 main_width">
        <FounderMessage
          head={`   
                <span style="color:#069183">Founder’s</span> Message
              `}
          content={memberContent}
          name={"Mr. Sanjayy Bharadwajj"}
          des={""}
          img={"/author.png"}
          size={
            "text-[#535353] xl:text-[26px] lg:text-[20px] text-[18px] 2xl:leading-[45px] xl:leading-[40px] pt-4 "
          }
          grid={`grid 2xl:grid-cols-[73%_1fr] lg:grid-cols-[60%_1fr] md:grid-cols-2`}
          order1={"lg:order-1 order-2"}
          order2={"lg:order-2 order-1"}
        />
      </div> */}
      <Living />
      {/* <Glimps /> */}
      <Testimonial />
      <FAQSection />
      <Community />
      <Footer />
      {/* <FloatingCTA /> */}
    </>
  );
}
