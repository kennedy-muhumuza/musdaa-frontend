import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FadeLoader } from "react-spinners";
import { login } from "../../store/actions/auth";
import { disableEnableButton } from "../../utils/disableEnableButton";

import Modal from "../../components/UI/modal/Modal";
import styles from "./Login.module.scss";
import Register from "../Register/Register";

const LogIn = ({ setInitialRoute }) => {
  const [isOpen, setIsOpen] = useState(false);

  const userRole = useSelector(
    (state) => state.auth.user && state.auth.user.userRole
  );

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const showNotificationModal = useSelector(
    (state) => state.notification.value
  );
  const navigateResources = () => {
    if (userRole === "admin") {
      navigate("/admin-resources", { replace: true });
    } else {
      navigate("/resources", { replace: true });
    }
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
      setError("");
      setIsLoading(true);

      await dispatch(login(email, password));
      setIsLoading(false);

      navigateResources();
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      setIsError(true);
      // console.log("error msg: " + error.message);
    }
  };
  const changeToRegisterRoute = () => {
    setInitialRoute(false);
    setIsOpen(true);
  };
  return (
    <Fragment>
      <div className={styles["login__container"]}>
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
        {error && <p>{error}</p>}
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
                onClick={() => changeToRegisterRoute()}
                to=""
                className={styles["link"]}
              >
                SignUp
              </Link>
              {/* <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                <Register />
              </Modal> */}
            </p>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default LogIn;
