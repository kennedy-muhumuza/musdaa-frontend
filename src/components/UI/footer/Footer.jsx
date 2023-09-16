import React from "react";

import logo from "../../../assets/logo.png";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles["main_footer_container"]}>
      <div className={styles["footer_container"]}>
        <div>
          <div className={styles["email_container"]}>
            <input
              placeholder="email@example.com"
              className={styles["email_input"]}
            />
            <button className={styles["news_letter_btn"]}>
              NEWS
              <span className={styles["letter_span"]}>LETTER</span>
            </button>
          </div>
          <button className={styles["subscribe_btn"]}>
            Subscribe to our News
          </button>
        </div>
        <div className={styles["site_map"]}>
          <span>SITE MAP</span>
          <select className={styles["select_tag"]} defaultValue={"MENU"}>
            <option
              value="MENU"
              // selected="selected"
              className={styles["option_tag"]}
            >
              MENU
            </option>
            <option value="RESOURCES">RESOURCES</option>
            <option value="SHOP">SHOP</option>
            <option value="DONATE">DONATE</option>
          </select>
          {/* <span>MENU</span> */}
        </div>
        <div>
          <img src={logo} className={styles["footer_logo"]} />
        </div>
      </div>

      <p className={styles["copyright_msg"]}>
        Copyright 2022 reserved MUSDAA LTD
      </p>
    </footer>
  );
};
