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
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./ring-design.jpg" alt="ring design" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>Professional Training in Jewelry Courses</h2>
              <p>
                We are Authorized Trainer of <b>JewelCAD 5.1</b> & <b>Rhinoceros</b> Software. CAD is an acronym for
                Computer Aided Design software. Today, jewelers and artisans design their pieces not by sketching with
                pen and paper but by using CAD software, which gives them a 2D or 3D model of what the piece will look
                like, and also the dimensions of each aspect of a piece of jewelry.
              </p>
              <Link href={"/courses"}>Read more</Link>
              <Link href={"/contact"}>Enroll now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./ccc.jpg" alt="ccc" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>CCC (Course On Computer Concepts)</h2>
              <p>
                Students who complete this course will gain a basic understanding of Windows, Word, Excel, PowerPoint,
                Gujarati Typing, Basic GST, email Digital Marketing, and business concepts. This is also a beginner
                course for people who want to do some advanced computer science courses. Student use CCC Certificate for
                Government Job, also in Private Sector.
              </p>
              <Link href={"/courses/ccc"}>Read more</Link>
              <Link href={"/contact"}>Enroll now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./tally.jpg" alt="tally" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>Learn Advance Computerized Practical Accounting</h2>
              <p>
                <b>Tally Prime</b> and <b>Miracle</b> is a business management software, that takes care of your
                Accounting (Sales, purchase, receivables, payable tracking), Inventory management (Order processing
                inventory tracking), Payroll management, Bank transactions, Statutory Compliance, etc. After Course
                Completed Student Get 100% Instant Job in Private Sector.
              </p>
              <Link href={"/courses#computerCourse"}>Read more</Link>
              <Link href={"/contact"}>Enroll now</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./pcSelling.jpg" alt="pc selling" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>Refurbished Laptop, Printer & Desktop Sales & Service</h2>
              <p>
                Welcome to Our Store, your premier destination for shopping of refurbished laptops. Browse through our
                extensive collection of high-quality refurbished laptops & Desktop from renowned brands like HP, Dell,
                Lenovo, and more. With our Warranty & Service Support.
              </p>
              <Link href={"/sales-service"}>Read more</Link>
              <Link href={"/contact"}>Availability check</Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./softwareSelling.jpg" alt="software selling" className="rounded bg-slate-200" />
          <div className={styles.sliderContent}>
            <div className={styles.mainContent}>
              <h2>License Software Solution</h2>
              <p>
                Software is the heart of every business for every industry. we are Sales Microsoft Windows, Office,
                Antivirus, Rhinoceros, Jewel CAD, and Accounting Software, we have highly experienced leadership team to
                helping business. we are committed to providing outstanding support, quick response and support for
                installation.
              </p>
              <Link href={"/sales-service"}>Read more</Link>
              <Link href={"/contact"}>Enroll now</Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
