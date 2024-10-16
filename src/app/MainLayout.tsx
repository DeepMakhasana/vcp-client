"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardLayout from "./creator/dashboard/DashboardLayout";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  console.log("path", path);
  const isUserSide = !path.includes("creator");

  if (isUserSide) {
    return (
      <>
        <Navbar />
        <main className="mx-auto max-w-screen-xl">{children}</main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <DashboardLayout path={path}>{children}</DashboardLayout>
    </>
  );
};

export default MainLayout;
