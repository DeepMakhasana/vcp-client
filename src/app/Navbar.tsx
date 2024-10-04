"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  console.log(path);
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 p-4">
      <h1 className="text-2xl">
        <Link href={"/"}>Logo.</Link>
      </h1>
      <ul className="flex items-center gap-5">
        <li className={`cursor-pointer ${path === "/" && "text-primary"}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`cursor-pointer ${path === "/courses" && "text-primary"}`}
        >
          <Link href={"/courses"}>Courses</Link>
        </li>
        <ThemeToggle />
        <li>
          <Button variant={"default"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
