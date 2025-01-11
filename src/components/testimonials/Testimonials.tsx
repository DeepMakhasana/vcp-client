"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./testimonials.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="container">
      <div className="heading">
        <h2 className="heading-style">Testimonials</h2>
        <p>Our satisfied customer says</p>
      </div>
      <div className={styles.testimonialsContainer}>
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
        >
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/male.png" alt="user image" />
              </div>
              <div className={styles.infoContent}>
                <p>
                  "I like the way they teach , feel comfort and explain in that way we get our problems solved thank
                  nikunj sir and team"
                </p>
                <h5>Sheikh Ashiq</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/male.png" alt="user image" />
              </div>
              <div className={styles.infoContent}>
                <p>
                  "It is best training center for computer courses around Rajkot. Its teaching method was very simple
                  and easy."
                </p>
                <h5>Shriyush Chauhan</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/female.png" alt="user image" />
              </div>
              <div className={styles.infoContent}>
                <p>
                  "The computer class was very well-organized and structured. The curriculum was comprehensive and
                  covered all the essential topics. I liked how the instructor broke down complex concepts into simpler
                  terms, making it easy to grasp."
                </p>
                <h5>Hiral Bhut</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/male.png" alt="user image" />
              </div>
              <div className={styles.infoContent}>
                <p>
                  "Good place to learn CAD in rajkot.The Faculty is experienced,helpful and friendly.Wonderful
                  experience overall."
                </p>
                <h5>Jay Ramani</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/male.png" alt="user image" />
              </div>
              <div className={styles.infoContent}>
                <p>
                  "Param Computer Classes is a right way to success in computer field. <br />
                  All faculties are very nice. <br />
                  They all are very helpful. <br />
                  They solve our all problem regarding this course."
                </p>
                <h5>Prajapati Bharat</h5>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.testimonialsContent}>
              <div className={styles.usrImage}>
                <img src="/female.png" alt="user image" />
              </div>

              <div className={styles.infoContent}>
                <p>
                  "I really appreciated the hands-on approach in the computer class. The practical exercises and
                  real-world examples helped me understand the concepts better and apply them in a meaningful way."
                </p>
                <h5>Jhanvi patel</h5>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
