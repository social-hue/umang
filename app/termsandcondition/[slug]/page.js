import { privacyandTermData } from "@/app/StaticData/Privacy&Terms";
import TermsPrivicy from "../../components/Terms&Privacy/TermsPrivicy";
import Header from "@/app/components/Header";
import Banner from "@/app/components/Banner";
import Footer from "@/app/components/Footer";

export default function Privacy({ params }) {
  const slug = params.slug;
  const content = privacyandTermData.find((item) => item.slug === slug);

  return (
    <div>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={content ? `${content.title1} ${content.title2}` : ""} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <div className="py-10 main_width">
          {content ? (
            <TermsPrivicy
              title1={content.title1}
              title2={content.title2}
              dis={content.dis}
            />
          ) : (
            <p className="text-red-500">No content found for this page.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
