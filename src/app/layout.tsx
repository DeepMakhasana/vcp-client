import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
// import { Poppins } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import AosProvider from "@/components/AosProvider";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Script from "next/script";

// const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Param Jewellery CAD Center | Rajkot",
  description:
    "Param Jewellery CAD Center is a complete solution of jewellery design, Accounting and computer courses in Rajkot. like JewelCAD 5.1, Rhinoceros, CorelDRAW CNC, CCC, Tally Prime and Miracle.",
  keywords:
    "Param Jewellery CAD Center, computer classes near me, jewellery design courses near me, JewelCAD 5.1, Rhinoceros, CCC, tally prime, miracle, coreldraw cnc, jewellery design courses in rajkot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1129419253074301');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Google Tag Manager */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=AW-1011718607" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-1011718607');
              gtag('config', 'G-5X6YWF2EJQ');
            `,
          }}
        />
      </head>
      {/* <body className={poppins.className}> */}
      <body>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1129419253074301&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <AosProvider />
        <NextTopLoader color="#0D7284" showSpinner={false} />
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
