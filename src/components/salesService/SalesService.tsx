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
        <h1 className="heading-style">Tech Solution</h1>
        <p>We are provides special hardware & software service for jewellery designer</p>
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
                <img src="/Dell-g15.png" alt="sell computer and laptop" style={{ objectFit: "contain" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/hp-victus.jpg" alt="sell computer and laptop" style={{ objectFit: "contain" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/asus-f17.jpg" alt="sell computer and laptop" style={{ objectFit: "contain" }} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/pcbuild.jpg" alt="sell computer and laptop" style={{ objectFit: "contain" }} />
              </SwiperSlide>
            </Swiper>
            <div className={styles.info}>
              <h2>Best Configuration for Jewellery Designer</h2>
              <p>
                Param Jewellery CAD Centre offers the best laptops and PCs specially configured for jewellery design,
                ensuring smooth performance with software like JewelCAD, Rhino, and CorelDRAW through high-speed
                processors, ample RAM, dedicated graphics, and crystal-clear display.
              </p>
              <ul>
                <li>Core i5 13th Generation Intel 13450HX</li>
                <li>NVIDIA GeForce RTX 3050</li>
                <li>16GB RAM DDR4 3200MHz & 512GB SSD</li>
                <li>FHD 15.6 Inches Screen Size</li>
                <li>Windows 11 & Office 21</li>
                <li>Backlit Keyboard</li>
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
                <img src="/jeweller-software.jpeg" alt="jewellery design software" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/office.png" alt="office" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/window.png" alt="window" />
              </SwiperSlide>
              {/* <SwiperSlide>
                <img src="/tally.png" alt="tally" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/autocad-software.jpg" alt="AutoCAD" />
              </SwiperSlide>
              <SwiperSlide> */}
              {/* <img src="/jewelcad.png" alt="jewelcad" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Rhinoceros-7.png" alt="Rhinoceros-7" />
              </SwiperSlide> */}
            </Swiper>
            <div className={styles.info}>
              <h2>License Software Solution</h2>
              <p>
                Param CAD Centre offers genuine jewellery design software such as JewelCAD 5.1, Rhino, and CorelDRAW at
                competitive prices, along with installation support and expert guidance.
              </p>
              <ul>
                <li>Windows 10 & 11</li>
                <li>Microsoft Office 21</li>
                <li>JewelCAD 5.1</li>
                <li>Rhinoceros 3D</li>
                <li>CorelDRAW CNC & ArtCAM</li>
                <li>ZBrush</li>
                <li>DesignGold </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SellService;
