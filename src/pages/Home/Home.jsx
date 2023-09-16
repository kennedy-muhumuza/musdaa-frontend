import React, { Fragment } from "react";
import styles from "./Home.module.scss";
import { AiFillPhone } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

import { NavBar } from "../../components/UI/navBar/NavBar";
import SliderComponent from "../../components/UI/slider/SliderComponent";
import { About } from "../../components/UI/about/About";
import { Materials } from "../../components/UI/materials/Materials";
import { Footer } from "../../components/UI/footer/Footer";
import { GeneralHeader } from "../../components/generalHeader/GeneralHeader";
import { Logos } from "../../components/logos/Logos";
// import About from "../aboutPage/AboutPage";

const Home = () => {
  return (
    <div className={styles["home-page-container"]}>
      {/* <div className="bg-green-500 p-8 mt-7"> */}
      <GeneralHeader />
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
  );
};

export default Home;
