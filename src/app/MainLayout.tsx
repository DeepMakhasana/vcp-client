"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-screen-xl">{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default MainLayout;
