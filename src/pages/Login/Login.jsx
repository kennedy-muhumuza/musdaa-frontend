import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FadeLoader } from "react-spinners";
import { login } from "../../store/actions/auth";
import { disableEnableButton } from "../../utils/disableEnableButton";

import Modal from "../../components/UI/Modal/Modal";
import styles from "./Login.module.scss";

const LogIn = () => {
  const userRole = useSelector(
    (state) => state.auth.user && state.auth.user.userRole
  );

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const showNotificationModal = useSelector(
    (state) => state.notification.value
  );
  const navigateResources = () => {
    console.log("userRole");
    console.log(userRole);
    // if (userRole === "admin") {
    navigate("/admin-resources", { replace: true });
    // } else {
    //   navigate("/resources", { replace: true });
    // }
  };
  const [isError, setIsError] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const showHidePassword = () => {
    switch (showPassword) {
      case true:
        setShowPassword(!showPassword);
        break;
      case false:
        setShowPassword(!showPassword);
        break;
      default:
    }
  };

  const handleLogInSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) return;
    try {
      setIsLoading(true);

      await dispatch(login(email, password));
      setIsLoading(false);

      navigateResources();
    } catch (error) {
      setIsLoading(false);

      setIsError(true);
      console.log("error msg: " + error.message);
    }
  };

  return (
    <Fragment>
      <div className={styles["login__container"]}>
        <header className={styles["login__container__header"]}>
          <span className={styles["login__container__header--logo"]}>
            MUSDAA COMMUNITY
          </span>
          <nav className={styles["login__container__header--links"]}>
            <Link
              to="/"
              className={styles["login__container__header--links-home"]}
            >
              Home
            </Link>
            <Link
              to="/signup"
              className={styles["login__container__header--links-signup"]}
            >
              SignUp
            </Link>
          </nav>
        </header>
        {showNotificationModal && <Modal isErrorMessage={isError} />}
        {isLoading && (
          <div className={styles["fade__loader__container"]}>
            <FadeLoader
              color="hsl(266, 50%, 36%)"
              className={styles["spinner"]}
            />
            <span>Authenticating...</span>
          </div>
        )}
        <form
          className={styles["login__form"]}
          onSubmit={(event) => handleLogInSubmit(event)}
        >
          <p className={styles["login__form__heading"]}>
            Log into your account
          </p>
          <div className={styles["login__form__input__container"]}>
            <input
              type="email"
              placeholder="Email"
              className={styles["login__form__input"]}
              value={email}
              onChange={(event) => handleEmailChange(event)}
              required
            />
          </div>
          <div className={styles["login__form__input__container"]}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={styles["login__form__input"]}
              value={password}
              onChange={(event) => handlePasswordChange(event)}
              required
            />
            {showPassword && (
              <IconContext.Provider
                value={{
                  color: "hsl(0, 0%, 18%)",
                  className: styles["eye__icon__container"],
                }}
              >
                <div onClick={() => showHidePassword()}>
                  <AiOutlineEyeInvisible />
                </div>
              </IconContext.Provider>
            )}
            {!showPassword && (
              <IconContext.Provider
                value={{
                  color: "hsl(0, 0%, 18%)",
                  className: styles["eye__icon__container"],
                }}
              >
                <div onClick={() => showHidePassword()}>
                  <AiOutlineEye />
                </div>
              </IconContext.Provider>
            )}
          </div>
          <div className={styles["login__btn_container"]}>
            <button
              id="button"
              type="submit"
              className={styles["login__form__btn"]}
            >
              Log In
            </button>
          </div>
          <div className={styles["forgot__password__container"]}>
            <p>Forgot Password?</p>
          </div>
          <div className={styles["dont__have___account__container"]}>
            <p className={styles["dont__have__account"]}>
              Don't have account{" "}
              <Link
                // onClick={() => dispatch(hideLogInForm())}
                to="/signup"
                className={styles["link"]}
              >
                SignUp
              </Link>
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogIn;
