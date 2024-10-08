"use client";
import { ModeToggle } from "@/components/theme-changer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const path = usePathname();
  console.log(path);
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 p-4">
      <h1 className="text-2xl">
        <Link href={"/"}>Logo.</Link>
      </h1>

      <ul className="hidden items-center gap-5 md:flex">
        <li className={`cursor-pointer ${path === "/" && "text-primary"}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li
          className={`cursor-pointer ${path === "/courses" && "text-primary"}`}
        >
          <Link href={"/courses"}>Courses</Link>
        </li>
        <ModeToggle />
        <li>
          <Button variant={"default"} asChild>
            <Link href={"/login"}>Login</Link>
          </Button>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="mt-2 space-y-2 md:hidden">
        <DropdownMenu onOpenChange={setToggle} open={toggle}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="m-3 flex min-w-52 flex-col gap-1 p-3">
            <DropdownMenuItem
              className={`cursor-pointer ${path === "/" && "text-primary"}`}
              onClick={() => setToggle((pre) => !pre)}
            >
              <Link href={"/"}>Home</Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`cursor-pointer ${
                path === "/courses" && "text-primary"
              }`}
              onClick={() => setToggle((pre) => !pre)}
            >
              <Link href={"/courses"}>Courses</Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setToggle((pre) => !pre)}>
              <ModeToggle />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                variant={"default"}
                asChild
                onClick={() => setToggle((pre) => !pre)}
              >
                <Link href={"/login"}>Login</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
