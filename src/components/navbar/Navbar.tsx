"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import styles from "./navbar.module.css";

const courseLinks = [
  { label: "JewelCAD 5.1", href: "/courses/jewelcad" },
  { label: "Rhinoceros 3D", href: "/courses/rhinoceros" },
  { label: "CorelDRAW CNC", href: "/courses/coreldraw" },
  { label: "ArtCAM", href: "/courses/artcam" },
  { label: "ZBrush", href: "/courses/zbrush" },
  { label: "DesignGold", href: "/courses/designgold" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const isCourseRoute = pathname.startsWith("/courses");

  useEffect(() => {
    setMenuOpen(false);
    setCoursesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCoursesOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navLinkClass = (href: string) => (pathname === href ? styles.activeLink : styles.navLink);

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`} aria-label="Main navigation">
        <Link href="/" className={styles.brand} aria-label="Param Jewellery CAD Center home">
          <img src="/Param-Logo.svg" alt="Param Jewellery CAD Center" />
        </Link>

        <Link href="/contact" className={styles.trialShowcase} aria-label="Claim your 10 day free trial">
          <img src="/trial.png" alt="10 days free trial" />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={23} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>

        <div id="main-menu" className={`${styles.menuPanel} ${menuOpen ? styles.menuOpen : ""}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/" className={navLinkClass("/")} aria-current={pathname === "/" ? "page" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={navLinkClass("/about")}
                aria-current={pathname === "/about" ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li
              className={styles.courseMenu}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setCoursesOpen(true);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setCoursesOpen(false);
              }}
            >
              <div className={styles.courseMenuTrigger}>
                <Link
                  href="/courses"
                  className={isCourseRoute ? styles.activeLink : styles.navLink}
                  aria-current={isCourseRoute ? "page" : undefined}
                >
                  Courses
                </Link>
                <button
                  type="button"
                  onClick={() => setCoursesOpen((open) => !open)}
                  aria-label="Toggle course menu"
                  aria-expanded={coursesOpen}
                  className={styles.courseToggle}
                >
                  <ChevronDown className={coursesOpen ? styles.chevronOpen : ""} size={16} strokeWidth={2} />
                </button>
              </div>

              <div className={`${styles.courseDropdown} ${coursesOpen ? styles.courseDropdownOpen : ""}`}>
                <div className={styles.courseDropdownHeader}>
                  <span>Explore our courses</span>
                  <p>Jewellery design tools, taught practically.</p>
                </div>
                <div className={styles.courseGrid}>
                  {courseLinks.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className={pathname === href ? styles.courseActive : ""}
                      onClick={() => {
                        setCoursesOpen(false);
                        setMenuOpen(false);
                      }}
                    >
                      {label}
                      <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link
                href="/tech-solution"
                className={navLinkClass("/tech-solution")}
                aria-current={pathname === "/tech-solution" ? "page" : undefined}
              >
                Tech Solution
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={navLinkClass("/contact")}
                aria-current={pathname === "/contact" ? "page" : undefined}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <Link href="/contact" className={styles.enrollAction}>
            Enroll now <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
