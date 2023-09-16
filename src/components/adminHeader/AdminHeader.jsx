import React from "react";
import { AdminNavBar } from "../UI/navBar/AdminNavBar";
import logo from "../../assets/logo.png";
import styles from "./AdminHeader.module.css";

export const AdminHeader = () => {
  return (
    <div className={styles["header-container"]}>
      <div className={styles["logo-link-container"]}>
        <div className={styles["logo-container"]}>
          <img src={logo} alt="MUSDAA logo" className={styles["musdaa_logo"]} />
        </div>
        <AdminNavBar />
      </div>
    </div>
  ); 
};
