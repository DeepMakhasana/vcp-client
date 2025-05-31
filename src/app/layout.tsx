import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
// import { Poppins } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/components/ReactQueryProvider";
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
