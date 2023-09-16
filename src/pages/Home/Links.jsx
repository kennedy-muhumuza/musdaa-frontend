import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.scss";

export const Links = () => {
  return (
    <div className={styles["links_container"]}>
      <p>Temporary Links</p>
      <br />
      <Link to="/logged-in" className={styles["temporary_links"]}>
        LOGGED IN
      </Link>
      <br />
      <Link to="/register-admin" className={styles["temporary_links"]}>
        REGISTER ADMIN
      </Link>{" "}
      <br />
      <Link to="/admin-tokens" className={styles["temporary_links"]}>
        TOKEN
      </Link>
      <br />
      <Link to="/admin-page" className={styles["temporary_links"]}>
        ADMIN PAGE
      </Link>{" "}
      <br />
    </div>
  );
};
