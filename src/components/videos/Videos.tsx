"use client";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import { Autoplay, Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./videos.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

SwiperCore.use([Autoplay, Virtual, Navigation, Pagination]);

const videos = ["_19kausamG4", "v1r2WnrwkzA", "iihFhuwWh5I"];

export default function Videos() {
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);

  const progressCircle = useRef<SVGSVGElement>(null);
  const progressContent = useRef<HTMLSpanElement>(null);

  const width = typeof window !== "undefined" ? window.innerWidth : 0;

  // const onAutoplayTimeLeft = (swiper: SwiperCore, time: number, progress: number) => {
  //   if (progressCircle.current && progressContent.current) {
  //     progressCircle.current.style.setProperty("--progress", `${1 - progress}`);
  //     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  //   }
  // };

  const slideTo = (index: number) => {
    if (swiperRef) {
      swiperRef.slideTo(index - 1, 0);
    }
  };

  return (
    <section>
      <div className={styles.gallery}>
        <div className="heading">
          <h2 className="heading-style">Best Movement</h2>
          <p>Our Jewellery Design Classes best movement in videos</p>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="relative w-[68%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
        >
          <CarouselContent>
            {videos.map((video, i) => (
              <CarouselItem key={`${i}`} className="md:basis-1/2 lg:basis-1/3">
                <div className="aspect-[9/16] w-full max-w-[360px] mx-auto max-h-[500px]">
                  <iframe
                    src={`https://www.youtube.com/embed/${video}?modestbranding=1&rel=0&controls=0&showinfo=0`}
                    title="YouTube Shorts"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-xl shadow-lg border-none"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <Swiper
          onSwiper={setSwiperRef}
          // slidesPerView={3}
          slidesPerView={width > 768 ? 3 : 1}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          navigation={true}
          virtual
        >
          <SwiperSlide>
            <div className="aspect-[9/16] w-full max-w-[360px] mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/_19kausamG4?modestbranding=1&rel=0&controls=0&showinfo=0`}
                title="YouTube Shorts"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[9/16] w-full max-w-[360px] mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/v1r2WnrwkzA?modestbranding=1&rel=0&controls=0&showinfo=0`}
                title="YouTube Shorts"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="aspect-[9/16] w-full max-w-[360px] mx-auto">
              <iframe
                src={`https://www.youtube.com/embed/iihFhuwWh5I?modestbranding=1&rel=0&controls=0&showinfo=0`}
                title="YouTube Shorts"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              />
            </div>
          </SwiperSlide>

          <div className={styles.autoPlayProgress} slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper> */}
      </div>
    </section>
  );
}

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}
