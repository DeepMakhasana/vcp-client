"use client";
import { ModeToggle } from "@/components/theme-changer";
import { Button } from "@/components/ui/button";
import { User } from "@/types/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useAuthContext from "@/context/auth/useAuthContext";
import { CircleUser, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MAIN_URL } from "@/lib/constants";

const LoginUserMenu = ({ user }: { user: User | null }) => {
  console.log(user);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="default" size="icon" className="rounded-full">
          <CircleUser className="h-20 w-20" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const path = usePathname();
  const { isAuthenticated, user } = useAuthContext();

  console.log({ isAuthenticated, user });

  return (
    <nav className="flex items-center justify-between border-b border-gray-300 p-4">
      <h1 className="text-2xl">
        <Link href={"/"}>Logo.</Link>
      </h1>

      <ul className="hidden items-center gap-5 md:flex">
        <li className={`cursor-pointer list-none ${path === "/" && "text-primary"}`}>
          <Link href={"/"}>Home</Link>
        </li>
        <li className={`cursor-pointer list-none ${path === "/courses" && "text-primary"}`}>
          <Link href={"/courses"}>Courses</Link>
        </li>
        {isAuthenticated && (
          <li className={`cursor-pointer list-none ${path === "/cart" && "text-primary"}`}>
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
        )}
        {/* <li className="list-none">
          <ModeToggle />
        </li> */}
        {isAuthenticated ? (
          <LoginUserMenu user={user} />
        ) : (
          <li className="list-none">
            <Button variant={"default"} asChild>
              <a href={`${MAIN_URL}`}>Start Learning</a>
            </Button>
          </li>
        )}

        {/* <li className="list-none">
          <Button variant={"default"} asChild>
            <Link href={"/checkout"}>Cart</Link>
          </Button>
        </li> */}
      </ul>

      {/* Mobile Menu */}
      <div className="mt-2 space-y-2 md:hidden">
        <DropdownMenu onOpenChange={setToggle} open={toggle}>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
              className={`cursor-pointer ${path === "/courses" && "text-primary"}`}
              onClick={() => setToggle((pre) => !pre)}
            >
              <Link href={"/courses"}>Courses</Link>
            </DropdownMenuItem>
            {/* <DropdownMenuItem
              className={`cursor-pointer ${path === "/courses" && "text-primary"}`}
              onClick={() => setToggle((pre) => !pre)}
            >
              <Link href={"/cart"}>Cart</Link>
            </DropdownMenuItem> */}
            {/* <DropdownMenuItem onClick={() => setToggle((pre) => !pre)}>
              <div className="flex gap-2 items-center">
                <ModeToggle />
                <span>Theme Modes</span>
              </div>
            </DropdownMenuItem> */}
            {isAuthenticated ? (
              <LoginUserMenu user={user} />
            ) : (
              <DropdownMenuItem>
                <Button variant={"default"} size={"sm"} asChild onClick={() => setToggle((pre) => !pre)}>
                  <a href={`${MAIN_URL}`}>Start Learning</a>
                </Button>
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
