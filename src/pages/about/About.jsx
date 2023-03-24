import React from "react";
// import "./About.css";
import styles from "./About.module.scss";
import emma from "../../assets/emma.jpg";
import brammer from "../../assets/brammer.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const About = () => {
  return (
    <div className={styles["about-page-container"]}>
      <div className={styles["card-container"]}>
        <div className={styles["about-logo"]}>
          <h2>MUSDAA LOGO</h2>
        </div>

        <h1 className={styles["executive-heading"]}>
          EXECUTIVE MEMBERS AT MUSDAA COMMUNITY
        </h1>
        <Swiper
          spaceBetween={25}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          //   centeredSlides={true}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          navigation={true}
          loop={true}
          fade={true}
          grabCursor={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          className={styles["swiper-slide-container"]}
        >
          {/* -------------------------------------CARD ONE------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD TWO------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD THREE------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD FOUR------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD FIVE------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD SIX------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* -------------------------------------CARD SEVEN------------------------------------------- */}
          <SwiperSlide>
            <div className={styles["card-wrapper"]}>
              <div className={styles["card swiper-slide"]}>
                <div className={styles["image-content"]}>
                  <span className={styles["overlay"]}> </span>
                  <div className={styles["card-image"]}>
                    <img src={brammer} alt="" className={styles["card-img"]} />
                  </div>
                </div>
                <div className={styles["card-content"]}>
                  <h2 className={styles["name"]}>Brammer Kigozi</h2>
                  <p className={styles["description"]}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rerum dignissimos, itaque quae optio aperiam distinctio?
                    Repellat ullam blanditiis
                  </p>
                  <button className={styles["button"]}>View More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
