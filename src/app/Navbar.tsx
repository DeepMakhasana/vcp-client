import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b border-gray-300 p-4">
      <h1 className="text-2xl">Logo.</h1>
      <ul className="flex items-center gap-5">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Courses</li>
        <li className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-slate-100">
          <Sun />
        </li>
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
