"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useRef, useEffect } from "react";
import { MAIN_URL } from "@/lib/constants";
import { MonitorPlay } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const toggleRef = useRef<HTMLDivElement | null>(null);
  const [toggle, setToggle] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);
  const [currentURL, setCurrentURL] = useState<string | null>(null);
  let count = 0;

  let width = 0;
  if (typeof window !== "undefined") {
    width = window.innerWidth;
  }

  useEffect(() => {
    document.addEventListener("click", checkIfClickedOutside, true);
    if (typeof window !== "undefined") {
      setCurrentURL(window.location.pathname);
    }

    return () => {
      document.removeEventListener("click", checkIfClickedOutside, true);
    };
  }, []);

  const checkIfClickedOutside = (e: MouseEvent) => {
    if (
      toggleRef.current &&
      ref.current &&
      !ref.current.contains(e.target as Node) &&
      !toggleRef.current.contains(e.target as Node)
    ) {
      setToggle(false);
    }
  };

  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };

  const closeNavbar = (url: string) => {
    setCurrentURL(url);
    setToggle(false);
  };

  let open = false;

  const dropdownIcon = () => {
    if (width < 992 || open === true) {
      open = true;
      setDropdown((prev) => !prev);
    }
  };

  return (
    <header>
      <nav className={styles.navbarContainer}>
        <div className={styles.navbar}>
          <Link onClick={() => closeNavbar("/")} href="/">
            <div className={styles.logo}>
              <img src="/Param-Logo.svg" alt="Param Computer Classes logo" />
            </div>
          </Link>
          <div className={styles.toggleMenu} ref={toggleRef} onClick={toggleMenu}>
            <img src="/bars-solid.svg" alt="=" />
          </div>
          <ul className={toggle ? styles.navList : styles.navbarClose} ref={ref}>
            <li onClick={() => closeNavbar("/")}>
              <Link href="/" className={currentURL == "/" ? styles.activeLink : styles.noActiveLink}>
                Home
              </Link>
            </li>
            <li onClick={() => closeNavbar("/about")}>
              <Link href="/about" className={currentURL == "/about" ? styles.activeLink : styles.noActiveLink}>
                About
              </Link>
            </li>
            <div className={styles.upDown}>
              <div className={styles.upDownIcon}>
                <li onClick={() => closeNavbar("/courses")} className={styles.dropdownLink}>
                  <Link href="/courses" className={currentURL == "/courses" ? styles.activeLink : styles.noActiveLink}>
                    Courses
                  </Link>
                </li>
                <div onClick={() => dropdownIcon()}>
                  <img src="/angle-down-solid.svg" alt="^" />
                </div>
              </div>

              <ul className={dropdown ? styles.dropdown : styles.dropdownClose}>
                <li className={styles.courseTitleLink}>
                  Jewellery Designing <span className={styles.courseTag}>Courses</span>
                </li>
                <li onClick={() => closeNavbar("/courses/jewelcad")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/jewelcad"
                    className={currentURL == "/courses/jewelcad" ? styles.activeLink : styles.noActiveLink}
                  >
                    JewelCAD 5.1
                  </Link>
                </li>
                <li onClick={() => closeNavbar("/courses/rhinoceros")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/rhinoceros"
                    className={currentURL == "/courses/rhinoceros" ? styles.activeLink : styles.noActiveLink}
                  >
                    Rhinoceros
                  </Link>
                </li>
                <li onClick={() => closeNavbar("/courses/coreldraw")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/coreldraw"
                    className={currentURL == "/courses/coreldraw" ? styles.activeLink : styles.noActiveLink}
                  >
                    CorelDRAW CNC
                  </Link>
                </li>
                <li className={styles.courseTitleLink}>
                  Accounting <span className={styles.courseTag}>Courses</span>
                </li>
                <li onClick={() => closeNavbar("/courses/tally")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/tally"
                    className={currentURL == "/courses/tally" ? styles.activeLink : styles.noActiveLink}
                  >
                    Tally Prime
                  </Link>
                </li>
                <li onClick={() => closeNavbar("/courses/miracle")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/miracle"
                    className={currentURL == "/courses/miracle" ? styles.activeLink : styles.noActiveLink}
                  >
                    Miracle
                  </Link>
                </li>
                <li className={styles.courseTitleLink}>
                  Computer Concepts <span className={styles.courseTag}>Course</span>
                </li>
                <li onClick={() => closeNavbar("/courses/ccc")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/ccc"
                    className={currentURL == "/courses/ccc" ? styles.activeLink : styles.noActiveLink}
                  >
                    CCC
                  </Link>
                </li>
              </ul>
            </div>
            <li onClick={() => closeNavbar("/learn")}>
              <Link href="/learn" className={currentURL == "/learn" ? styles.activeLink : styles.noActiveLink}>
                Learn online
              </Link>
            </li>
            <li onClick={() => closeNavbar("/sales-service")}>
              <Link
                href="/sales-service"
                className={currentURL == "/sales-service" ? styles.activeLink : styles.noActiveLink}
              >
                Sales & Service
              </Link>
            </li>
            <li onClick={() => closeNavbar("/contact")}>
              <Link href="/contact" className={currentURL == "/contact" ? styles.activeLink : styles.noActiveLink}>
                Contact Us
              </Link>
            </li>
            <li onClick={() => closeNavbar("/contact")}>
              <a href={MAIN_URL}>
                <Button>
                  <MonitorPlay className="w-5 h-5" /> Start Learning
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
