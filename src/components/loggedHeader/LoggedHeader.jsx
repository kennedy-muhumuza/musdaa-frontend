import React from "react";
import { LoggedNavBar } from "../UI/navBar/LoggedNavBar";
import logo from "../../assets/logo.png";
import styles from "./LoggedHeader.module.css";

export const LoggedHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-link-container"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="MUSDAA logo" className={styles["musdaa_logo"]} />
        </div>
        <LoggedNavBar />
      </div>
    </div>
  );
};
