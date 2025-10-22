import {
  Poppins,
  Roboto,
  Inter,
  Montserrat,
  Outfit,
  Lato
  // Big_Shoulders_Display,
  // Barlow_Condensed,
} from "next/font/google";
import Script from "next/script"; // ✅ import Script from next/script
import Header from "./components/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import FloatingCTA from "./components/floatingButton/floatingButton";
import Footer from "./components/Footer";
// import PromoCard from "./components/popup";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap"
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap"
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-roboto",
  display: "swap"
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap"
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap"
});

// const barlowCondensed = Barlow_Condensed({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-poppins",
//   display: "swap"
// });

// const bigShouldersDisplay = Big_Shoulders_Display({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
//   variable: "--font-poppins",
//   display: "swap"
// });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
  display: "swap",
});


export const metadata = {
  title: "Because every age deserves new beginnings",
  description:
    "Umang Living is India’s first multi-city senior independent-living community, thoughtfully designed with love and respect. We believe that at 55, life doesn’t slow down -- it blossoms.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://www.umangliving.com/"),
  openGraph: {
    title: "Because every age deserves new beginnings",
    description:
      "Umang Living is India’s first multi-city senior independent-living community, thoughtfully designed with love and respect. We believe that at 55, life doesn’t slow down -- it blossoms.",
    url: "https://www.umangliving.com/",
    type: "website",
    siteName: "Umang Living",
    images: [
      {
        url: "https://www.umangliving.com/banner.png",
        width: 1200,
        height: 630,
        alt: "Because every age deserves new beginnings",
      },
    ],
    updatedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Because every age deserves new beginnings",
    description:
      "Umang Living is India’s first multi-city senior independent-living community, thoughtfully designed with love and respect.",
    site: "@umangliving",
    creator: "@umangliving",
    images: ["https://www.umangliving.com/banner.png"],
  },
  other: {
    "last-modified": new Date().toUTCString(),
    "google-site-verification": "googleddd1afab57f5951d.html",
  },
};
             
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/faviconNew.ico"
          type="image/x-icon"
          sizes="any"
        />
        {/* ✅ Google Analytics via Next Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X8ZCDZN3QT"
          strategy="lazyOnload"
        />
         <Script id="schema-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Umang Living",
            url: "https://www.umangliving.com/",
            logo: "https://www.umangliving.com/faviconNew.ico",
            description:
              "Umang Living is India&apos;s first multi-city senior independent-living community, thoughtfully designed with love and respect.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9871825999",
              contactType: "customer service",
              areaServed: "IN",
              availableLanguage: "English",
            },
            sameAs: [
              "https://www.facebook.com/umangliving",
              "https://twitter.com/umangliving",
              "https://www.instagram.com/umangliving"
            ]
          })}
        </Script>
        <Script id="google-analytics" strategy="lazyOnload" async>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X8ZCDZN3QT');
          `}
        </Script>
      </head>
      <body
        className={[
          roboto.variable,
          "antialiased",
        ].join(" ")}
      >
        <Header />
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <Footer />
        <FloatingCTA />
        {/* <PromoCard /> */}
      </body>
    </html>
  );
}
