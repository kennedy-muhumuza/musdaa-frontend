import React from "react";
import styles from "./Materials.module.css";
import magazine from "../../../assets/magazine.jpg";
export const Materials = () => {
  return (
    <div className={styles["materials_container"]}>
      <div className={styles["card_wrapper"]}>
        <div className={styles["image_content"]}>
          {/* <span className={styles["overlay"]}> </span> */}
          <div className={styles["card_image_container"]}>
            <img src={magazine} alt="" className={styles["card_img"]} />
          </div>
        </div>
        <div className={styles["content"]}>
          <div className={styles["card_content_container"]}>
            <h2 className={styles["name"]}>ARTICLES</h2>
            <p className={styles["description"]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              dignissimos, itaque quae optio aperiam &nbsp;
              <button className={styles["view_more_btn"]}>
                MORE... &nbsp; &nbsp;
              </button>
              🧾
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
