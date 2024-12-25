"use client";
import useAuthContext from "@/context/auth/useAuthContext";
import { redirect } from "next/navigation";
import { ReactNode, useLayoutEffect } from "react";

const AuthProtection = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuthContext(); // Replace with your auth logic
  console.log("protect route: ", isAuthenticated);

  useLayoutEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect("/");
    }
  }, [isAuthenticated, isLoading]);

  if (isLoading) {
    return <p>Loading...</p>; // Show a spinner or skeleton while checking authentication
  }

  if (!isAuthenticated) {
    return null; // Render nothing or a loading spinner while redirecting
  }
  return <>{children}</>;
};

export default AuthProtection;
