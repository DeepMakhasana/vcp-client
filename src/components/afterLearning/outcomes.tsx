import Link from "next/link";
import { ArrowUpRight, BriefcaseBusiness, Factory, Gem, Store } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./outcomes.module.css";

interface CareerPath {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const careerPaths: CareerPath[] = [
  {
    number: "01",
    title: "Freelance Jewellery Designer",
    description: "Work for brands or individual clients who need prototype designs.",
    icon: BriefcaseBusiness,
  },
  {
    number: "02",
    title: "Design for Jewellery Brands",
    description: "Bring fresh design ideas to an established jewellery brand.",
    icon: Gem,
  },
  {
    number: "03",
    title: "Start a Jewellery Design Studio",
    description: "Offer services like consultation, prototyping, and final design.",
    icon: Store,
  },
  {
    number: "04",
    title: "Work with Jewellery Manufacturers",
    description: "Many manufacturers need designers to create collections.",
    icon: Factory,
  },
];

export const OutcomesSection = () => {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span>Career roadmap</span>
          </div>
          <h2>Career Options</h2>
          <p>Explore the career opportunities available after learning jewellery design.</p>
        </div>

        <div className={styles.grid}>
          {careerPaths.map(({ number, title, description, icon: Icon }) => (
            <article key={title} className={styles.card} data-aos="fade-up">
              <div className={styles.cardTop}>
                <span className={styles.number}>{number}</span>
                <span className={styles.icon} aria-hidden="true">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
              </div>
              <div className={styles.cardBody}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
              {/* <span className={styles.arrow} aria-hidden="true">
                <ArrowUpRight size={20} strokeWidth={1.8} />
              </span> */}
            </article>
          ))}
        </div>

        <div className={styles.footer}>
          <p>Not sure which direction is right for you?</p>
          <Link href="/contact" className={styles.footerLink}>
            Talk to our team <ArrowUpRight size={17} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
};
