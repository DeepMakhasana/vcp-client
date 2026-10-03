"use client";
import { useEffect, useState } from "react";
import styles from "./counting.module.css";
import { useSpring, animated } from "@react-spring/web";

const Counting = () => {
  const currentYear = new Date().getFullYear();
  const yearExperience = currentYear - 2010;

  const CounterNumber = ({ n }: { n: number }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const { number } = useSpring({
      from: { number: 0 },
      number: isMounted ? n : 0,
      config: {
        mass: 1,
        tension: 20,
        friction: 10,
      },
    });

    const formatter = new Intl.NumberFormat();

    if (!isMounted) {
      return <span>{formatter.format(n)}</span>;
    }

    return <animated.span>{number.to((val) => formatter.format(Math.round(val)))}</animated.span>;
  };

  return (
    <section className={styles.countingContainer}>
      <p className={styles.topTitle}>MORE THAN 500 STUDENTS LEARN FROM US</p>
      <div className={styles.countSection}>
        <div className={styles.counter}>
          {/* <span>8,000+</span> */}
          <span>
            <CounterNumber n={500} />+
          </span>
          <p>Successful Student</p>
        </div>
        <div className={styles.counter}>
          <span>
            <CounterNumber n={100} />%
          </span>
          <p>Practical Support while Job</p>
        </div>
        <div className={styles.counter}>
          <span>
            <CounterNumber n={yearExperience} />+
          </span>
          <p>Years Experience</p>
        </div>
        <div className={styles.counter}>
          <span>
            <CounterNumber n={100} />%
          </span>
          <p>Jobs ready Courses</p>
        </div>
      </div>
    </section>
  );
};

export default Counting;
