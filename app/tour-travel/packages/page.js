// import { seoData } from "@/app/lib/seoMeta";
import Community from "@/app/components/Community";
import AyodhyaBanarasTour from "../../components/tour/AyodhyaBanarasTour";


// export async function generateMetadata ({ params }) {
//     // Await params to fix Next.js 15 warning
//     const { slug } = params;
//     const meta = seoData.tour.find((item) => item.slug === slug);
//     if (!meta) {
//       return {
//         title: "Travel Packages for Senior Citizens | Umang Living",
//         description: "Explore Our Tour Packages for Senior Living.",
//       };
//     }
  
//     return {
//       title: meta.title ? meta.title : "",
//       description: meta.description ? meta.description : "",
//       metadataBase: new URL(meta.url ? meta.url : ""),
//       alternates: {
//         canonical: meta.canonical ? meta.canonical : "",
//       },
//       openGraph: {
//         title: meta.title ? meta.title : "",
//         description: meta.description ? meta.description : "",
//         url: meta.url ? meta.url : "",
//         type: meta.type ? meta.type : "",
//         siteName: meta.siteName ? meta.siteName : "",
//         images: [
//           {
//             url: meta.image,
//             width: 1200,
//             height: 630,
//             alt: meta.title,
//           },
//         ],
//       },
//       twitter: {
//         card: "summary_large_image",
//         title: meta.title,
//         description: meta.description,
//         site: "@umangliving",
//         creator: "@umangliving",
//         images: [meta.image],
//       },
//       keywords: meta.keywords ? meta.keywords.split(",").map((kw) => kw.trim()) : "",
//     };
//   };
  
export default function packages() {
    return (
        <>
            <AyodhyaBanarasTour />
            <Community />
        </>
    );
}
