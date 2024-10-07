"use client";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <li
      className="cursor-pointer list-none rounded-full p-2 transition-all duration-300 hover:bg-secondary"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </li>
  );
};

export default ThemeToggle;
