import Banner from "../components/Banner";
import Community from "../components/Community";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Aboutus from "../components/MediaGallery/about";
import MediaGrid from "../components/MediaGrid";
import { mediaData } from "../StaticData/mediaData";

export default function MediaGallery() {
  return (
    <>
      <Banner title={"Media Gallery"} />

      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
        </div>

        <Aboutus />

        {mediaData.map((section) => (
          <MediaGrid
            key={section.id}
            bgColor={section.bgColor}
            title={section.title}
            subtitle={section.subtitle}
            images={section.images}
          />
        ))}

        <Community />
      </div>
      <Footer />
    </>
  );
}
