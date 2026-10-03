"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./slider.module.css";

const slides = [
  {
    title: "JewelCAD 5.1",
    tagline: "Precision design for exquisite jewellery.",
    image: "/course/jewelcad.jpeg",
    href: "/courses/jewelcad",
  },
  {
    title: "CorelDRAW CNC",
    tagline: "Take ideas from graphics to fabrication, seamlessly.",
    image: "/course/coreldraw.jpg",
    href: "/courses/coreldraw",
  },
  {
    title: "Rhinoceros 3D",
    tagline: "Explore limitless 3D modelling and boundless creativity.",
    image: "/course/rhino.jpeg",
    href: "/courses/rhinoceros",
  },
  {
    title: "ArtCAM",
    tagline: "Bring imaginative forms to life through digital sculpting.",
    image: "/course/artcam.jpeg",
    href: "/courses/artcam",
  },
  {
    title: "ZBrush",
    tagline: "Shape detailed digital jewellery with confidence.",
    image: "/course/zbrush.jpeg",
    href: "/courses/zbrush",
  },
  {
    title: "DesignGold",
    tagline: "Elevate jewellery design with modern creative tools.",
    image: "/course/designgold.jpeg",
    href: "/courses/designgold",
  },
];

export default function Slider() {
  return (
    <Swiper
      centeredSlides
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      navigation
      modules={[Autoplay, Pagination, Navigation]}
      className={styles.slider}
    >
      {slides.map(({ title, tagline, image, href }, index) => (
        <SwiperSlide key={title} className={styles.slide}>
          <Image
            src={image}
            alt={`${title} course`}
            fill
            sizes="100vw"
            className={styles.image}
            priority={index === 0}
            unoptimized
          />
          <div className={styles.overlay} />

          <div className={`${styles.contentWrap} container`}>
            <div className={styles.mainContent}>
              <div className={styles.eyebrow}>
                <Sparkles size={15} strokeWidth={2} aria-hidden="true" />
                <span>Jewellery design course</span>
              </div>
              <h2>{title}</h2>
              <p>{tagline}</p>
              <div className={styles.actions}>
                <Link href={href} className={styles.primaryAction}>
                  Explore course <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
                </Link>
                <Link href="/contact" className={styles.secondaryAction}>
                  Enrol now
                </Link>
              </div>
            </div>
          </div>

          <span className={styles.slideNumber} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
