import Banner from "../components/Banner";
import Community from "../components/Community";
import Contents from "../components/content/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Aboutus from "../components/stay/Aboutus";
import { legal } from "../StaticData/legal";

export default function LegalConsultation() {
  return (
    <>
      <div className="py-8 ">
        <Header />
      </div>
      <Banner title={"Legal Consultation"} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <Aboutus />
        <div>
          <Contents {...legal} />
        </div>

        <Community />
      </div>
      <Footer />
    </>
  );
}
