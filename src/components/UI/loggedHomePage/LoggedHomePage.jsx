import React, { Fragment, useRef, useContext, useState } from "react";
import axios from "axios";
import { url } from "../../../constants/url";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./LoggedHomePage.css";
import { IconContext } from "react-icons";

import { RiLogoutCircleRLine } from "react-icons/ri";
import LogOut from "../logout/Logout";

const Loggedhomepage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log("user");
  console.log(user);

  return (
    <Fragment>
      <div className="logged-home-page-container">
        <div className="welcome-msg">
          <p>{/* {`Welcome dear ${{firstName} {lastName} }`} */}</p>
          <span>
            {user.firstName} {user.lastName}
            {/* {user?.first_name} {user?.last_name} */}
          </span>
        </div>
        <div className="access-msg">
          <p>
            You will access all the MUSDAA resources on this page once it is
            fully set up
          </p>{" "}
          <br />
          <p>Thank you </p>
        </div>

        <div className="logout">
          <LogOut />
        </div>
      </div>
    </Fragment>
  );
};

export default Loggedhomepage;
