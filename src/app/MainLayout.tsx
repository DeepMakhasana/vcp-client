"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardLayout from "./creator/dashboard/DashboardLayout";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  console.log("3");
  const isUserSide = !path.includes("creator");
  const isCreatorRegister = path.includes("/creator/register");
  const isCreatorLogin = path.includes("/creator/login");

  if (isCreatorLogin || isCreatorRegister || isUserSide) {
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
