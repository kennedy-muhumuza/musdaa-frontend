import { useState } from "react";
import React, { Component, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import styles from "./SliderComponent.module.css";
import cabin1 from "../../../assets/cabin-001.jpg";
import cabin2 from "../../../assets/cabin-002.jpg";
import cabin3 from "../../../assets/cabin-003.jpg";
import cabin4 from "../../../assets/cabin-004.jpg";
import cabin5 from "../../../assets/cabin-005.jpg";
import cabin6 from "../../../assets/cabin-006.jpg";
import arrow from "../../../assets/arrow.png";

const SliderComponent = () => {
  const images = [cabin1, cabin2, cabin3, cabin4, cabin5, cabin6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageMovementStatus, setImageMovementStatus] = useState(true);

  const handleNext = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((n) => n + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };
  const handlePrev = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex((p) => p - 1);
    } else {
      setCurrentImageIndex(images.length - 1);
    }
  };

  // useEffect(() => {
  //   const handleMovementStatus = (index) => {
  //     console.log("index in movement");
  //     console.log(index);
  //     if (images[index] === images.length - 1) setImageMovementStatus(false);
  //     if (images[index] === 0) setImageMovementStatus(true);
  //   };
  //   setTimeout(() => {
  //     handleMovementStatus(currentImageIndex);
  //     if (currentImageIndex < images.length - 1 && imageMovementStatus) {
  //       handleMovementStatus(currentImageIndex);
  //       setCurrentImageIndex((n) => n + 1);
  //     }

  //     if (currentImageIndex > 0 && !imageMovementStatus) {
  //       handleMovementStatus(currentImageIndex);
  //       setCurrentImageIndex(0);
  //     }
  //     console.log(currentImageIndex);
  //     console.log(imageMovementStatus);
  //   }, [2000]);
  // }, [images, currentImageIndex, imageMovementStatus]);

  return (
    <div className={styles.main_div}>
      <div className={styles.container}></div>
      <div className={styles.imageContainer}>
        {/* <span onClick={() => handlePrev()} className={styles.prevIcon}>
          &larr;
        </span> */}

        <span
          onClick={() => handlePrev()}
          className={styles["imag_nav_icon_container"]}
        >
          <img src={arrow} alt="arrow_icon" className={styles["prev_arrow"]} />
        </span>
        <img
          src={images[currentImageIndex]}
          alt="MUSDAA members"
          className={styles.musdaa_image}
        />
        {/* <span onClick={() => handleNext()} className={styles.nextIcon}>
          &rarr;
        </span> */}
        <span
          onClick={() => handlePrev()}
          className={styles["imag_nav_icon_container"]}
        >
          <img src={arrow} alt="arrow_icon" className={styles["next_arrow"]} />
        </span>
      </div>
      <span className={styles.learn_more}>Learn More...</span>
    </div>
  );
};
export default SliderComponent;
