import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeProvider from "@/components/ThemeProvider";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const poppins = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Video Course Platform",
    absolute: "Video Course Platform",
  },
  description: "One stop solution for content creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={poppins.className}
      >
        <ThemeProvider>
          <Navbar />
          <main className="mx-auto max-w-screen-xl">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
