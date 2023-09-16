import React, { useState } from "react";
import styles from "./NavNar.module.css";
import { Link } from "react-router-dom";
// import Modal from "../../components/UI/modal/Modal";
import Modal from "../modal/Modal";
import LogIn from "../../../pages/Login/Login";
import Register from "../../../pages/Register/Register";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [initialRoute, setInitialRoute] = useState(true);
  const handleCloseModal = () => {
    setIsOpen(false);
    setInitialRoute(true);
  };
  return (
    <>
      <div className={styles["link_container"]}>
        <ul className={styles["link_list"]}>
          <li>
            <Link to="/home" className={`text-white styles["link_item"]`}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`text-blue-900 styles["link_item"]`}>
              About
            </Link>
          </li>
          <li>
            <Link to="/home" className={`text-blue-900 styles["link_item"]`}>
              Features
            </Link>
          </li>
          <li>
            {/* <Link to="/login" className={styles["link_item"]}>
              Shop
            </Link> */}

            <Link
              onClick={() => setIsOpen(true)}
              className={`text-blue-900 styles["link_item"]`}
            >
              Shop
            </Link>

            <Modal open={isOpen} onClose={() => handleCloseModal()}>
              {initialRoute ? (
                <LogIn setInitialRoute={setInitialRoute} />
              ) : (
                <Register />
              )}
            </Modal>
          </li>
          <li>
            <Link to="/links" className={`text-blue-900 styles["link_item"]`}>
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
