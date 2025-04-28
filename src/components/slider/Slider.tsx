"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./slider.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

export default function Slider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        // style={{ height: "82vh" }}
      >
        <SwiperSlide>
          <img src="/course/jewelcad.jpeg" alt="JewelCAD" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>JewelCAD 5.1</h2>
              <p>"Precision Design for Exquisite Jewellery"</p>
              <div>
                <Link href={"/courses/jewelcad"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/course/coreldraw.jpg" alt="coreldraw" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>CorelDRAW CNC</h2>
              <p>"Graphics to Fabrication, Seamlessly"</p>
              <div>
                <Link href={"/courses/coreldraw"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/course/rhino.jpeg" alt="Rhinoceros 3D" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>Rhinoceros 3D</h2>
              <p>"Limitless 3D Modeling, Boundless Creativity"</p>
              <div>
                <Link href={"/courses/rhinoceros"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/course/artcam.jpeg" alt="artcam" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>ArtCAM</h2>
              <p>"Sculpting Imagination into Reality"</p>
              <div>
                <Link href={"/courses/artcam"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/course/zbrush.jpeg" alt="zbrush" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>ZBrush</h2>
              <p>"Digital Sculpting, Unleashed"</p>
              <div>
                <Link href={"/courses/zbrush"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/course/designgold.jpeg" alt="designgold" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>DesignGold</h2>
              <p>"Elevating Jewelry Design with Innovation"</p>
              <div>
                <Link href={"/courses/designgold"}>Read more</Link>
                <Link href={"/contact"}>Enroll now</Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
