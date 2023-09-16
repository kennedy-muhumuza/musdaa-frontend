import React from "react";
import styles from "./LoggedNavBar.module.css";
import { Link } from "react-router-dom";

export const LoggedNavBar = () => {
  return (
    <>
      <div className={styles["link_container"]}>
        <ul className={styles["link_list"]}>
          <li>
            <Link to="" className={styles.home_link_item}>
              Home
            </Link>
          </li>
          <li>
            <Link to="" className={styles["link_item"]}>
              <select className={styles["select_tag"]} defaultValue={"MENU"}>
                <option value="Resource" className={styles["option_tag"]}>
                  Resource
                </option>
                <option value="Magazines">Magazines</option>
                <option value="Musdaa Umbrellas">Musdaa Umbrellas</option>
                <option value="Musdaa tags">Musdaa tags</option>
                <option value="Musdaa notebooks">Musdaa notebooks</option>
                <option value="Musdaa T-shirts">Musdaa T-shirts</option>
              </select>
            </Link>
          </li>
          <li>
            <Link to="" className={styles["link_item"]}>
              <select className={styles["select_tag"]} defaultValue={"MENU"}>
                <option value="Projects" className={styles["option_tag"]}>
                  Projects
                </option>
                <option value="Project1">Project1</option>
                <option value="Project2">Project2</option>
                <option value="Project3">Project3</option>
                <option value="Project4">Project4</option>
                <option value="Project5">Project5</option>
              </select>
            </Link>
          </li>
          <li>
            <Link to="" className={styles["link_item"]}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="" className={styles["link_item"]}>
              Donate
            </Link>
          </li>
          <li>
            <input
              type="text"
              placeholder="Search"
              className={styles["input_field"]}
            />
          </li>
          <li>
            <button className={styles["search_btn"]}>Search</button>
          </li>
        </ul>
      </div>
    </>
  );
};
