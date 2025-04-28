"use client";
import Link from "next/link";
import styles from "./jewelleryCourse.module.css";
import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const JewelleryCourse = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section>
      <div className="heading">
        <h2 className="heading-style">Jewellery Designing Courses</h2>
        <p>We offer a Jewellery Designing Courses with experienced instructors.</p>
      </div>
      <div className="bgColor">
        <div className={styles.jewelCourseContainer}>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/jewelcad.jpeg" alt="JewelCAD course" className="rounded bg-slate-200" />
            </div>
            <div className={styles.courseName}>
              <h2>JewelCAD 5.1 Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/jewelcad">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/rhino.jpeg" alt="rhinoceros course" className="rounded bg-slate-200" />
            </div>
            <div className={styles.courseName}>
              <h2>Rhinoceros Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/rhinoceros">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/coreldraw.jpg" alt="corelDraw course" className="rounded bg-slate-200" />
            </div>
            <div className={styles.courseName}>
              <h2>CorelDRAW CNC Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/coreldraw">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/artcam.jpeg" alt="artcam course" />
            </div>
            <div className={styles.courseName}>
              <h2>ArtCAM Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/artcam">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/zbrush.jpeg" alt="ZBrush course" />
            </div>
            <div className={styles.courseName}>
              <h2>ZBrush Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/zbrush">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
          <div className={styles.course} data-aos="fade-up">
            <div className={styles.img}>
              <img src="/course/designgold.jpeg" alt="designgold course" />
            </div>
            <div className={styles.courseName}>
              <h2>DesignGold Course</h2>
            </div>
            <div className={styles.courseLink}>
              <Link href="/courses/designgold">Read More</Link>
              <Link href="/contact">Enroll Now</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JewelleryCourse;
