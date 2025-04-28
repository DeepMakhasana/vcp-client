"use client";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./gallery.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Autoplay, Virtual, Navigation, Pagination]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  const onAutoplayTimeLeft = (swiper: SwiperCore, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const numberOfImages = Array.from({ length: 16 }, (_, i) => i + 1);

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };

  return (
    <section>
      <div className={styles.gallery}>
        <div className="heading">
          <h2 className="heading-style">Gallery</h2>
          <p>Our Jewellery Design Classes best movements and designs</p>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          // slidesPerView={3}
          slidesPerView={width > 768 ? 3 : 1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          navigation={true}
          virtual
        >
          <SwiperSlide>
            <img src="/param-bulding.jpg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/classroom.png" className="rounded" alt="param cad center classroom" />
          </SwiperSlide>

          {numberOfImages.map((i) => (
            <SwiperSlide key={i}>
              <img src={`/gallery/${i}.jpg`} className="rounded" alt={`param cad center design ${i}`} />
            </SwiperSlide>
          ))}

          {/* <SwiperSlide>
            <img src="/jewelcad-1.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/jewelcad-2.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/jewelcad-3.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/jewelcad-4.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="/rhino-1.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/rhino-2.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/rhino-3.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/rhino-4.jpeg" className="rounded" alt="param cad center" />
          </SwiperSlide> */}

          <div className={styles.autoPlayProgress} slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <p className={styles.appendButtons}>
          <button onClick={() => slideTo(2)} className={styles.slide250}>
            Classes
          </button>
          <button onClick={() => slideTo(6)} className={styles.slide500}>
            CAD Jewellery
          </button>
        </p>
      </div>
    </section>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
