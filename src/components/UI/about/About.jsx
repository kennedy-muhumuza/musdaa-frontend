import React from "react";
import styles from "./About.module.css";
import cabin2 from "../../../assets/cabin-002.jpg";
import cabin3 from "../../../assets/cabin-003.jpg";

export const About = () => {
  return (
    <>
      <div className={styles["about_container"]}>
        <div className={styles["card_wrapper"]}>
          <div className={styles["image_content"]}>
            {/* <span className={styles["overlay"]}> </span> */}
            <div className={styles["card_image_container"]}>
              <img src={cabin3} alt="" className={styles["card_img"]} />
            </div>
          </div>
          <div className={styles["card_content_container"]}>
            <h2 className={styles["name"]}>ABOUT US</h2>
            <p className={styles["description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dignissimos, itaque quae optio aperiam &nbsp;
              <button className={styles["view_more_btn"]}>
                MORE... &nbsp; &nbsp;
              </button>
            </p>
          </div>
          <div className={styles["update_status"]}>Last updated 1 week ago</div>
        </div>
        {/*------------------------------- OUR HISTORY---------------------- */}
        <div className={styles["card_wrapper"]}>
          <div className={styles["image_content"]}>
            {/* <span className={styles["overlay"]}> </span> */}
            <div className={styles["card_image_container"]}>
              <img src={cabin2} alt="" className={styles["card_img"]} />
            </div>
          </div>
          <div className={styles["card_content_container"]}>
            <h2 className={styles["name"]}>OUR HISTORY</h2>
            <p className={styles["description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dignissimos, itaque quae optio aperiam &nbsp;
              <button className={styles["view_more_btn"]}>
                MORE... &nbsp; &nbsp;
              </button>
            </p>
          </div>
          <div className={styles["update_status"]}>Last updated 1 week ago</div>
        </div>
      </div>
    </>
  );
};
