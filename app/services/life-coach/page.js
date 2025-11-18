import Image from "next/image";
import Banner from "../../components/Banner";
import Community from "../../components/Community";
// import Footer from "../../components/Footer";
import { seoData } from "../../lib/seoMeta";

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

export default function LifeCoach() {
    return (
        <>
            <Banner title={"Life Coach"} bgImage={"/citizen.jpg"} />
            <div className=" relative overflow-hidden ">
                <div className="absolute -top-[150px] -left-[180px] -z-9">
                    <img src="/rangoli.png" alt="rangoli" className="w-[70%]" loading="lazy" decoding="async" />
                </div>
                <section className="p-6 md:p-10 md:mx-10 flex flex-col md:flex-row items-center gap-6">
                    {/* Left: Image */}
                    <div className="w-full md:w-1/2 relative h-64 md:h-80">
                        <Image
                            src="/services/life-coach.webp" // replace with your image
                            alt="Rangoli"
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>
                    {/* Right: Text */}
                    <div className="w-full md:w-1/2 text-gray-700">
                        <h2 className="text-2xl font-bold mb-4">Empowering Seniors to Live with Purpose and Joy</h2>
                        <p className="text-md leading-relaxed">
                            Our Life Coach for Senior Citizens service is designed to help elders rediscover purpose, joy, and emotional balance in their golden years. Through thoughtful one-on-one sessions, our certified life coaches guide seniors in setting meaningful goals, nurturing self-confidence, and embracing change with positivity. Whether it’s adjusting to retirement, coping with loneliness, or reigniting old passions, we provide a safe, compassionate space for reflection and growth. It’s not just about counseling - it’s about empowering seniors to lead happier, more fulfilling lives every single day.
                        </p>
                    </div>
                </section>
                <Community />
            </div>
            {/* <Footer /> */}
        </>
    );
}
