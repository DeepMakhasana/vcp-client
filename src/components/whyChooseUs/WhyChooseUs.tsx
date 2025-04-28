"use client";
import styles from "./whyChooseUs.module.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="container">
      <div className="heading">
        <h2 className="heading-style">Why Choose Us?</h2>
        <p>
          Because we don't just teach, we also do market work. This allows you to gain practical knowledge and
          understanding.
        </p>
      </div>
      <div className={styles.boxContainer}>
        <div className={`${styles.box} ${styles.flexColumnReverse}`} data-aos="fade-right">
          <div className={styles.boxContent}>
            <h3 className={styles.tar}>Certified Jewelry Design Courses</h3>
            <p className={styles.tar}>
              All our jewelry design courses come with recognized certification, adding value to your skills and career.
            </p>
          </div>
          <div className={styles.boxIcon}>
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "48px", height: "48px" }}
            >
              <img src="/curriculum.svg" alt="curriculum" />
            </div>
          </div>
        </div>
        <div className={`${styles.box} ${styles.flexColumn}`} data-aos="fade-left">
          <div className={styles.boxIcon}>
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "48px", height: "48px" }}
            >
              <img src="/practical.svg" alt="Facilities" />
            </div>
          </div>
          <div className={styles.boxContent}>
            <h3 className={styles.tal}>Expert Faculty with Industry Experience</h3>
            <p className={styles.tal}>
              Our instructors have over 10 years of experience and actively work in the jewelry design market, bringing
              real-world insights into every class.
            </p>
          </div>
        </div>
        <div className={`${styles.box} ${styles.flexColumnReverse}`} data-aos="fade-right">
          <div className={styles.boxContent}>
            <h3 className={styles.tar}>Job Placement & Work-from-Home Training</h3>
            <p className={styles.tar}>
              We offer 100% job assistance and also train students on how to build a successful jewelry design career
              from home.
            </p>
          </div>
          <div className={styles.boxIcon}>
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "48px", height: "48px" }}
            >
              <img src="/expertise.svg" alt="expertise" />
            </div>
          </div>
        </div>
        <div className={`${styles.box} ${styles.flexColumn}`} data-aos="fade-left">
          <div className={styles.boxIcon}>
            <div
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "48px", height: "48px" }}
            >
              <img src="/facilities.svg" alt="curriculum" />
            </div>
          </div>
          <div className={styles.boxContent}>
            <h3 className={styles.tal}>Lifetime Practical Support</h3>
            <p className={styles.tal}>
              We provide lifetime practical support even after course completion to help you grow continuously in the
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
