"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosProvider = () => {
  useEffect(() => {
    const root = document.documentElement;

    AOS.init();
    root.classList.add("aos-ready");

    const refreshAnimations = () => {
      AOS.refreshHard();
    };

    refreshAnimations();
    window.addEventListener("load", refreshAnimations);

    return () => {
      window.removeEventListener("load", refreshAnimations);
      root.classList.remove("aos-ready");
    };
  }, []);

  return null;
};

export default AosProvider;
