import BlogBanner from "@/app/components/blog/banner/BlogBanner";
import { BlogGrid } from "@/app/components/blog/BlogGrid";
import Community from "@/app/components/Community";
import Footer from "@/app/components/Footer";
import { seoData } from "@/app/lib/seoMeta";
import { posts } from "@/app/StaticData/posts";
import React from "react";

export const generateMetadata = async ({ params }) => {
  const slug = params?.slug;
  const meta = seoData.blogs.find((item) => item.slug === slug);

  if (!meta) {
    return {
      title: "Blog | Umang Living",
      description: "Explore our blog and stories around senior living.",
    };
  }

  return {
    title: meta.title ? meta.title : "",
    description: meta.description ? meta.description : "",
    metadataBase: new URL(meta.url ? meta.url : ""),
    alternates: {
      canonical: meta.canonical ? meta.canonical : "",
    },
    openGraph: {
      title: meta.title ? meta.title : "",
      description: meta.description ? meta.description : "",
      url: meta.url ? meta.url : "",
      type: meta.type ? meta.type : "",
      siteName: meta.siteName ? meta.siteName : "",
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
    keywords: meta.keywords
      ? meta.keywords.split(",").map((kw) => kw.trim())
      : "", // array of keywords
  };
};

export default async function Page({ params }) {
  const slug = await params;

  const conntent = posts.find((slugs) => slugs.slug === slug.slug);

  return (
    <>
      <BlogBanner data={conntent} />
      <div className=" relative overflow-hidden ">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" className="w-[70%] " />
        </div>
        <div className="py-10">
          <div className="main_width">
            <div
              className="text-[#535353] lg:text-[22px] md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: conntent.content1 }}
            ></div>
            <div className="grid grid-cols-[20px_1fr] gap-4 py-6">
              <div>
                <img src="/svgs/quotent.svg" className="" />
              </div>
              <div>
                <div
                  className="text-[#B41F56] py-4 xl:text-[50px] lg:text-[40px] lg:leading-[50px] md:text-[35px] md:leading-[45px] text-[30px] font-semibold xl:leading-[60px] uppercase"
                  dangerouslySetInnerHTML={{ __html: conntent.heading }}
                ></div>
              </div>
            </div>
            <div
              className="text-[#535353] lg:text-[22px] md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: conntent.content2 }}
            ></div>
          </div>
        </div>

        <div className="">
          <div className="main_width pt-4">
            <h4 className="lg:text-[40px] md:text-[35px] text-[30px] lg:leading-[60px]  font-light ">
              <span className="green">You May</span>
              <span className="gradient_text"> Also Like</span>
            </h4>
          </div>
          <BlogGrid limit={3} />
        </div>
      </div>
      <Community />
      <Footer />
    </>
  );
}
