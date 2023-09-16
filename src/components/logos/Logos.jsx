import React from "react";
import fb from "../../assets/fb.png";
import youtube from "../../assets/youtube.png";
import whatsapp from "../../assets/whatsap_logo.png";
import styles from "./Logos.module.css";

export const Logos = () => {
  return (
    <div className={styles["logos_container"]}>
      <img src={fb} className={styles["logo_img"]} />
      <img src={youtube} className={styles["logo_img"]} />
      <img src={whatsapp} className={styles["logo_img"]} />
    </div>
  );
};
