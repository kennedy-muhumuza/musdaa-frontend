import React, { Fragment } from "react";
// import "./Home.css";
import styles from "./Home.module.scss";
import { Link, useNavigate } from "react-router-dom";

// import ImageSlider, { Slide } from "react-auto-image-slider";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { IconContext } from "react-icons";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillPhone } from "react-icons/ai";

const Home = () => {
  const textAreaStyles = () => {};
  return (
    <Fragment>
      <div className={styles["home-page-container"]}>
        {/*------------------ HEADER SECTION ------------------------*/}
        <div className={styles["header-container"]}>
          <div className={styles["logo-link-container"]}>
            <div className={styles["logo-container"]}>
              <h1>MUSDAA</h1>
            </div>
            <div className={styles["header-link-container"]}>
              <div className={styles["home-link"]}>
                <Link to="/home" className={styles["link-btn-home"]}>
                  Home
                </Link>
              </div>
              <div className={styles["link-btn"]}>
                <Link to="/about" className={styles["link-btn"]}>
                  About Us
                </Link>
              </div>
              <div className={styles["link-btn"]}>
                <Link to="/home" className={styles["link-btn"]}>
                  Features
                </Link>
              </div>
              <div className={styles["link-btn"]}>
                <Link to="/login" className={styles["link-btn"]}>
                  Donate
                </Link>
              </div>
              <div className={styles["link-btn"]}>
                <Link to="/login" className={styles["link-btn"]}>
                  Shop
                </Link>
              </div>
            </div>
          </div>
          <div className={styles["content-slider-container"]}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              centeredSlides={true}
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              navigation={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              className={styles["swiper-slide-container"]}
            >
              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <h1>PROJECTS</h1>
                    <p>THE NYIZE PROJECT</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <h1>RESOURCES</h1>
                    <p>
                      like MUSDAA T-shirts, notebooks etc Lorem ipsum dolor{" "}
                      <br />
                      sit amet consectetur adipisicing elit. <br />
                      Nemo praesentium eius porro illum temporibus. .
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <h1>FELLOWSHIPS</h1>
                    <p>On both Tuesdays and Fridays</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <h1>MUSDAA LIBRARY</h1>
                    <p>
                      Here you can access Discovery guides, lessons, <br /> hymn
                      books and several other Godly literature <br /> Nesciunt
                      animi possimus ipsa amet voluptatibus earum dolorem <br />
                      exercitationem quidem officiis cumque. Ut, illum. Nulla,
                      optio
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <p>
                      Here you can access Discovery guides, lessons, <br /> hymn
                      books and several other Godly literature <br /> Nesciunt
                      animi possimus ipsa amet voluptatibus earum dolorem <br />
                      exercitationem quidem
                    </p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className={styles["slide-content-container"]}>
                  <div className={styles["empty-div"]}></div>
                  <div>
                    <p>
                      Here you can access Discovery guides, lessons, <br /> hymn
                      books and several other Godly literature <br /> Nesciunt
                      animi possimus ipsa amet voluptatibus earum dolorem <br />
                      exercitationem quidem
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
            <Link to="/register">REGIGISTER</Link> <br />
            <Link to="/register-admin">REGISTER ADMIN</Link> <br />
            <Link to="/login">LOGIN</Link>
          </div>
        </div>
        {/* ------------------------------------ABOUT PAGE SECTION--------------------------------------- */}
        <div className={styles["about-page-container"]}>
          <div className={styles["about-page-logo-content-wrapper"]}>
            <div className={styles["about-page-logo-container"]}></div>
            <div className={styles["about-content"]}>
              <div className={styles["about-headings"]}>
                <h1>MUSDAA LTD COMPANY</h1>
                <h3>MUSDAA LTD COMPANY</h3>
              </div>
              <p className={styles["about-paragragh"]}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
                saepe labore ipsa maxime rem commodi magnam officia animi
                consectetur aperiam. Iusto officiis Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolorum hic odio libero,
                asperiores temporibus praesentium porro,
              </p>
              <button className={styles["about-btn"]}>
                Read More{" "}
                <IconContext.Provider
                  value={{
                    className: "global-class-name",
                  }}
                >
                  <div className={styles["read-more-icon"]}>
                    <HiOutlineArrowNarrowRight />
                  </div>
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
        {/* ------------------------------------TESTIMONIAL PAGE SECTION--------------------------------------- */}

        <div className={styles["testimonials-container"]}>
          <div className={styles["testimonials-wrapper"]}>
            <div className={styles["stories-of-transformation"]}>
              <h1>STORIES OF TRANSFORMATION</h1>
            </div>
            <div className={styles["testimonial-logo-content-wrapper"]}>
              <div className={styles["testimonial-logo-container"]}></div>
              <div className={styles["testimonial-content"]}>
                <div className={styles["sabbath-heading"]}>
                  <h2>THE SABBATH</h2>
                </div>
                <p className={styles["testimonial-paragraph"]}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  doloribus velit similique, autem saepe pariatur expedita
                  cupiditate explicabo aut quasi sunt, tempora aliquid ipsum ex
                  eum praesentium soluta impedit quibusdam!
                </p>
                <div className={styles["testimonial-btn-container"]}>
                  <button className={styles["read-more-btn"]}>
                    Read More
                    <IconContext.Provider
                      value={{
                        className: "global-class-name",
                      }}
                    >
                      <div className={styles["read-more-icon"]}>
                        <HiOutlineArrowNarrowRight />
                      </div>
                    </IconContext.Provider>
                  </button>
                  <button className={styles["all-stories-btn"]}>
                    Find all Our Stories here ...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------------CONTACT PAGE SECTION--------------------------------------- */}

        <div className={styles["contact-container"]}>
          <div className={styles["three-contact-sections"]}>
            <div className={styles["contact-us-container"]}>
              <div className={styles["contact-inputs"]}>
                <h1>Contact Us</h1>

                <input
                  type="text"
                  placeholder="Your Phone e.g 0754 3****"
                  className={styles["message-input"]}
                />
                <input
                  type="text"
                  placeholder="Your Email"
                  className={styles["message-input"]}
                />
                <textarea
                  id="w3review"
                  rows="6"
                  cols="50"
                  placeholder="Type your message ..."
                ></textarea>
                <button className={styles["contact-submit-btn"]}>SUBMIT</button>
              </div>
            </div>
            <div className={styles["site-map-container"]}>
              <div>
                <h1>Site Map</h1>
                <p>All Pages</p>
                <ul className={styles["site-map-list"]}>
                  <li>About Us</li>
                  <li>Donate</li>
                  <li>Resources</li>
                  <li>Shop</li>
                  <li>Projects</li>
                </ul>
              </div>
            </div>
            <div className={styles["phone-numbers-container"]}>
              <div className={styles["phone-section-logo"]}>LOGO</div>
              <div className={styles["phone-numbers"]}>
                <div>
                  <AiFillPhone /> + (256) 770
                </div>
                <div>
                  <AiFillPhone /> + (256) 770
                </div>
                <div>
                  <AiFillPhone /> + (256) 770
                </div>
                <div>
                  <AiFillPhone /> + (256) 770
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>Copyright 2022 reserved MUSDAA LTD</footer>
      </div>
    </Fragment>
  );
};

export default Home;
