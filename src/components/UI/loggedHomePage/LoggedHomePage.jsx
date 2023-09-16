import React, { Fragment, useRef, useContext, useState } from "react";
import axios from "axios";
import { url } from "../../../constants/url";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "./LoggedHomePage.module.css";
import { IconContext } from "react-icons";

import { RiLogoutCircleRLine } from "react-icons/ri";
import LogOut from "../logout/Logout";
// import { GeneralHeader } from "../../generalHeader/GeneralHeader";
import { LoggedHeader } from "../../loggedHeader/LoggedHeader";
import SliderComponent from "../slider/SliderComponent";
import { About } from "../about/About";
import { Materials } from "../materials/Materials";
import { Logos } from "../../logos/Logos";
import { Footer } from "../footer/Footer";

const LoggedHomepage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log("user in loggedHomePage");
  console.log(user);

  return (
    <Fragment>
      <div className="logged-home-page-container">
        <div className="logout">
          <LogOut />
        </div>
        <div className={styles["home-page-container"]}>
          {/* <GeneralHeader /> */}
          <LoggedHeader />
          <SliderComponent />
          <div className={styles["body_container"]}>
            <main>
              <About />
              <Materials />
            </main>
            <Logos />
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default LoggedHomepage;
