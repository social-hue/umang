import {
  Poppins,
  Big_Shoulders_Display,
  Barlow_Condensed,
} from "next/font/google";
import Script from "next/script"; // ✅ import Script from next/script
import Header from "./components/Header";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import FloatingCTA from "./components/floatingButton/floatingButton";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const bigShoulders = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-big-shoulders",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
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
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
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
          poppins.variable,
          bigShoulders.variable,
          barlowCondensed.variable,
          "antialiased",
        ].join(" ")}
      >
        <Header />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: "#333",
              color: "#fff",
            },
          }}
        />
        <FloatingCTA />
      </body>
    </html>
  );
}
