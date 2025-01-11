"use client";
import styles from "./sellService.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

const SellService = () => {
  return (
    <main id="saleService">
      <div className="heading">
        <h1 className="heading-style">sales & Service</h1>
        <p>We are Provides Technically Chip Level Hardware & Software Service in Affordable Price</p>
      </div>
      <div className="container">
        <div className={styles.sellServiceContainer}>
          <div className={styles.sellService}>
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
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/l-1.jpg" alt="sell computer and laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/pcSelling.jpg" alt="sell computer and laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/l-1.1.jpg" alt="sell computer and laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/l-3.png" alt="sell computer and laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/pc-1.jpg" alt="sell computer and laptop" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/pc-2.png" alt="sell computer and laptop" />
              </SwiperSlide>
            </Swiper>
            <div className={styles.info}>
              <h2>Laptop, Desktop Sales & Service</h2>
              <p>
                Whether you are planning to buy a laptop to work from home or attend online classes, finding a good
                laptop requires the proper insight into must-have features and specifications.
              </p>
              <ul>
                <li>Latest Version Operating System</li>
                <li>Auto Backup & Restore</li>
                <li>Printer installation</li>
                <li>Accounting Software Backup</li>
                <li>Error Solution Via Any desk</li>
                <li>Warranty Lookup</li>
                <li>Data Recovery</li>
              </ul>
            </div>
          </div>
          {/* <div className={styles.sellService}>
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
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/pcSelling.jpg"  alt="sell computer and laptop" />
                            </SwiperSlide>
                        </Swiper>
                        <div className={styles.info}>
                            <h2>New and second hand Computer sales & Service</h2>
                            <p>We remain on top of trends by regularly changing our product range to include the latest advances in technology. Our computers come with the most recent parts that provide the best performance and efficiency, from powerful CPUs and fast RAM to modern graphics cards and SSD storage options. In order to improve your current systems and meet changing computing demands, we also provide upgrade alternatives.</p>
                            <ul>
                                <li>Extensive Product Selection</li>
                                <li>Latest Technology and Upgrades</li>
                                <li>Customer Satisfaction Guaranty</li>
                                <li>Knowledgeable and Friendly Staff</li>
                                <li>Repair and Technical Support</li>
                                <li>Warranty and After-Sales Service</li>
                            </ul>
                        </div>
                    </div> */}
          <div className={styles.sellService}>
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
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/window.png" alt="window" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/office.png" alt="office" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/graphic.png" alt="graphic software" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/tally.png" alt="tally" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/autocad-software.jpg" alt="AutoCAD" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/jewelcad.png" alt="jewelcad" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Rhinoceros-7.png" alt="Rhinoceros-7" />
              </SwiperSlide>
            </Swiper>
            <div className={styles.info}>
              <h2>License Software Solution</h2>
              <p>
                Welcome to our platform for paid software, where you can choose from a variety of high-quality software
                that meets your particular needs. We are committed to offering top-notch software solutions with
                excellent value and functionality.
              </p>
              <ul>
                <li>Windows (e.g., Microsoft Windows all version)</li>
                <li>Office Suites (e.g., Microsoft Office)</li>
                <li>Antivirus and Malware Protection (e.g., Norton, McAfee)</li>
                <li>Graphic Design Tools (e.g., Adobe Photoshop, CorelDRAW)</li>
                <li>Accounting and Finance Software (e.g., Tally prime, Miracle)</li>
                <li>Jewelley designing Software (e.g., JewelCAD, Rhinoceros)</li>
                <li>3D Modeling Software (e.g., Autocad, Autodesk)</li>
                <li>Video Editing Software (e.g., Adobe Premiere Pro, Final Cut Pro)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellService;
