import BlogBanner from "@/app/components/blog/banner/BlogBanner";
import { BlogGrid } from "@/app/components/blog/BlogGrid";
import Community from "@/app/components/Community";
import Footer from "@/app/components/Footer";
import { seoData } from "@/app/lib/seoMeta";
import { posts } from "@/app/StaticData/posts";
// import Image from "next/image";
import Link from "next/link";
import React from "react";

export const generateMetadata = async ({ params }) => {
  // Await params to fix Next.js 15 warning
  const { slug } = await params;
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
    keywords: meta.keywords ? meta.keywords.split(",").map((kw) => kw.trim()) : "",
  };
};

export default async function Page({ params }) {
  // Await params to fix Next.js 15 warning
  const { slug } = await params;
  const content = posts.find((post) => post.slug === slug);

  if (!content) {
    // Handle case where content is not found
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Content not found</h1>
          <p className="text-gray-600 mb-4">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <BlogBanner data={content} />
      <div className="relative overflow-hidden">
        <div className="absolute -top-[150px] -left-[180px] -z-9">
          <img src="/rangoli.png" alt="rangoli" loading="lazy" decoding="async" className="w-[70%]" />
        </div>
        <div className="py-10">
          <div className="main_width">
            <div
              className="text-[#535353] lg:text-[22px] md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: content?.content1 || "" }}
            ></div>
            <div className="grid grid-cols-[20px_1fr] gap-4 py-6">
              <div>
                <img src="/svgs/quotent.svg" alt="quotent" loading="lazy" decoding="async" />
              </div>
              <div>
                <div
                  className="text-[#B41F56] py-4 xl:text-[50px] lg:text-[40px] lg:leading-[50px] md:text-[35px] md:leading-[45px] text-[30px] font-semibold xl:leading-[60px] uppercase"
                  dangerouslySetInnerHTML={{ __html: content?.heading || "" }}
                ></div>
              </div>
            </div>
            <div
              className="text-[#535353] lg:text-[22px] md:text-[18px]"
              dangerouslySetInnerHTML={{ __html: content?.content2 || "" }}
            ></div>
          </div>
        </div>
        <div className="">
          <div className="main_width pt-4">
            <h4 className="lg:text-[40px] md:text-[35px] text-[30px] lg:leading-[60px] font-light ">
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