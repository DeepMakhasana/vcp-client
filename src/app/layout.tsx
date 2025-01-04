import type { Metadata } from "next";
import dynamic from "next/dynamic";
import NextTopLoader from "nextjs-toploader";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";
import MainLayout from "./MainLayout";
import Toaster from "@/components/ui/toaster";
import ReactQueryProvider from "@/components/ReactQueryProvider";
const AuthProvider = dynamic(() => import("@/context/auth/authProvider"), { ssr: false });

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Video Courses | Param CAD Center",
  description: "Video Courses for jewellery design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("1");
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NextTopLoader color="#884DEE" />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <ReactQueryProvider>
              <MainLayout>{children}</MainLayout>
              <Toaster />
            </ReactQueryProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
