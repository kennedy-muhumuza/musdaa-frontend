import React from "react";
import { NavBar } from "../UI/navBar/NavBar";
import logo from "../../assets/logo.png";
import styles from "./GeneralHeader.module.css";

export const GeneralHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-link-container"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="MUSDAA logo" className={styles["musdaa_logo"]} />
        </div>
        <NavBar />
      </div> 
    </div>
  );
};
