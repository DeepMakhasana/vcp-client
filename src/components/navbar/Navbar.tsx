"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useRef, useEffect } from "react";
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
      <nav className={`${styles.navbarContainer} py-1`}>
        <div className={styles.navbar}>
          <div className="flex">
            <Link onClick={() => closeNavbar("/")} href="/">
              <div className={styles.logo}>
                <img src="/Param-Logo.svg" alt="Param Jewellery CAD Center logo" />
              </div>
            </Link>
          </div>
          <div className={styles.logo}>
            <img src="/trial.png" alt="10 days free trial lecture" className="max-h-16 object-contain" />
          </div>
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
                <li onClick={() => closeNavbar("/courses/artcam")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/artcam"
                    className={currentURL == "/courses/artcam" ? styles.activeLink : styles.noActiveLink}
                  >
                    ArtCAM
                  </Link>
                </li>
                <li onClick={() => closeNavbar("/courses/zbrush")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/zbrush"
                    className={currentURL == "/courses/zbrush" ? styles.activeLink : styles.noActiveLink}
                  >
                    ZBrush
                  </Link>
                </li>
                <li onClick={() => closeNavbar("/courses/designgold")} className={styles.courseSubTitleLink}>
                  <Link
                    href="/courses/designgold"
                    className={currentURL == "/courses/designgold" ? styles.activeLink : styles.noActiveLink}
                  >
                    DesignGold
                  </Link>
                </li>
              </ul>
            </div>
            {/* <li onClick={() => closeNavbar("/learn")}>
              <Link href="/learn" className={currentURL == "/learn" ? styles.activeLink : styles.noActiveLink}>
                Learn online
              </Link>
            </li> */}
            <li onClick={() => closeNavbar("/tech-solution")}>
              <Link
                href="/tech-solution"
                className={currentURL == "/tech-solution" ? styles.activeLink : styles.noActiveLink}
              >
                Tech Solution
              </Link>
            </li>
            <li onClick={() => closeNavbar("/contact")}>
              <Link href="/contact" className={currentURL == "/contact" ? styles.activeLink : styles.noActiveLink}>
                Contact Us
              </Link>
            </li>
            {/* <li onClick={() => closeNavbar("/contact")}>
              <a href={MAIN_URL}>
                <Button>
                  <MonitorPlay className="w-5 h-5" /> Start Learning
                </Button>
              </a>
            </li> */}
            <li onClick={() => closeNavbar("/contact")}>
              <Link href={"/contact"}>
                <Button>Enroll now</Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
