"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import DashboardLayout from "./dashboard/DashboardLayout";
import AuthProtection from "@/components/AuthProtection";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const path = usePathname();
  const isDashboard = path.includes("dashboard");

  if (!isDashboard) {
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
      <AuthProtection>
        <DashboardLayout path={path}>{children}</DashboardLayout>
      </AuthProtection>
    </>
  );
};

export default MainLayout;
