import React, { Fragment, useRef, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { url } from "../../constants/url";
import styles from "./RegisterAdmin.module.scss";
import { registerAdmin } from "../../store/actions/auth";
import { IconContext } from "react-icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { disableEnableButton } from "../../utils/disableEnableButton";
import Modal from "../../components/UI/Modal/Modal";
import { FadeLoader } from "react-spinners";

import Select from "react-select";
import countryList from "react-select-country-list";

const Register = () => {
  const options = useMemo(() => countryList().getData(), []);

  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adminToken, setAdminToken] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [telNumber, setTelNumber] = useState("");

  const [onSuccess, setOnSuccess] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const showNotificationModal = useSelector(
    (state) => state.notification.value
  );
  const [isError, setIsError] = useState(false);
  const [passwordValidationMsg, setPasswordValidationMsg] = useState("");
  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleSelectedCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleAdminTokenChange = (event) => {
    setAdminToken(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleTelNumberChange = (event) => {
    setTelNumber(event.target.value);
  };
  const navigateLogin = () => {
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 2000);
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

  const registerHandler = async (event) => {
    if (
      (!adminToken,
      !firstName || !lastName || !email || !password || !country || !telNumber)
    )
      return;
    try {
      setIsLoading(true);
      disableEnableButton("signup-button", true);
      await dispatch(
        registerAdmin(
          adminToken,
          firstName,
          lastName,
          email,
          country,
          telNumber,
          password,
          "admin"
        )
      );
      navigateLogin();
      setIsLoading(false);
      disableEnableButton("signup-button", false);
    } catch (error) {
      setIsLoading(false);
      disableEnableButton("signup-button", false);
      setIsError(true);
      console.log("error msg: ");
      console.log(error.message);
    }
  };

  const arePasswordsMatching = () => {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password === confirmPassword) return true;
    setPasswordValidationMsg("**Passwords don't match");
    setIsPasswordError(true);
    setTimeout(() => {
      setPasswordValidationMsg("");
      setIsPasswordError(false);
    }, 5000);
    return false;
  };

  const isValidPasswordLength = () => {
    const password = document.getElementById("password").value;
    if (password.length >= 6 && password.length <= 15) return true;
    setPasswordValidationMsg(
      "**Passwords must be at least 6 characters and must not exceed 15"
    );
    setIsPasswordError(true);
    setTimeout(() => {
      setPasswordValidationMsg("");
      setIsPasswordError(true);
    }, 5000);
    return false;
  };

  const validPasswordOnSubmit = (event) => {
    event.preventDefault();
    isValidPasswordLength() && arePasswordsMatching() && registerHandler();
  };
  return (
    <Fragment>
      <div className={styles["register-container"]}>
        {onSuccess && (
          <span style={{ color: "green" }}>
            You are now registered successfully
          </span>
        )}
        {showNotificationModal && <Modal isErrorMessage={isError} />}
        {isLoading && (
          <div className={styles["fade__loader__container"]}>
            <FadeLoader
              color="hsl(266, 50%, 36%)"
              className={styles["spinner"]}
            />
            <span>Signing up...</span>
          </div>
        )}
        <div className={styles["register"]}>
          <h4>Create an account here</h4>
          <fieldset>
            <legend>Admin Account setup</legend>

            <form
              onSubmit={(event) => {
                validPasswordOnSubmit(event);
              }}
            >
              <div>
                <label>Admin Token: &nbsp;</label>
                <input
                  value={adminToken}
                  type="text"
                  placeholder="Enter Admin Token"
                  onChange={(event) => {
                    handleAdminTokenChange(event);
                  }}
                  required
                />
              </div>
              <div>
                <label>First Name: &nbsp;</label>
                <input
                  // ref={firstNameRef}
                  value={firstName}
                  type="text"
                  placeholder="First Name"
                  onChange={(event) => {
                    handleFirstNameChange(event);
                  }}
                  required
                />
              </div>
              <div>
                <label>Last Name: &nbsp;</label>
                <input
                  // ref={lastNameRef}
                  value={lastName}
                  type="text"
                  placeholder="Last Name"
                  onChange={(event) => {
                    handleLastNameChange(event);
                  }}
                  required
                />
              </div>
              <div>
                <label>Email: &nbsp;</label>
                <input
                  // ref={emailRef}
                  value={email}
                  type="email"
                  placeholder="Email"
                  onChange={(event) => {
                    handleEmailChange(event);
                  }}
                  required
                />
              </div>
              {isPasswordError && (
                //Display this message in the modal
                <span className={styles["password-error"]}>
                  {passwordValidationMsg}
                </span>
              )}

              <div className={styles["signup__form__input__container"]}>
                <label>Password: &nbsp;</label>
                <input
                  // ref={passwordRef}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  onChange={(event) => {
                    handlePasswordChange(event);
                  }}
                  required
                />
                {showPassword && (
                  <IconContext.Provider
                    value={{
                      color: "black",
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
                      color: "black",
                      className: styles["eye__icon__container"],
                    }}
                  >
                    <div onClick={() => showHidePassword()}>
                      <AiOutlineEye />
                    </div>
                  </IconContext.Provider>
                )}
              </div>

              <div className={styles["signup__form__input__container"]}>
                <label>Confirm password: &nbsp;</label>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className={styles["signup__form__input"]}
                  id="confirm-password"
                  value={confirmPassword}
                  onChange={(event) => {
                    handleConfirmPasswordChange(event);
                  }}
                  required
                />
                {showPassword && (
                  <IconContext.Provider
                    value={{
                      color: "black",
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
                      color: "black",
                      className: styles["eye__icon__container"],
                    }}
                  >
                    <div onClick={() => showHidePassword()}>
                      <AiOutlineEye />
                    </div>
                  </IconContext.Provider>
                )}
              </div>

              <div>
                <label>Country: &nbsp;</label>
                <input
                  // ref={countryRef}
                  value={country}
                  type="text"
                  placeholder="Home Country"
                  onChange={(event) => {
                    handleSelectedCountryChange(event);
                  }}
                  required
                />
              </div>
              {/* <div className={styles["signup__form__input__container"]}>
                <Select
                  options={options}
                  value={countrySelected}
                  onChange={(event) => handleSelectedCountryChange(event)}
                  // autoFocus // to be implemented
                  placeholder="Select Your Country"
                  // className={styles["signup__form__select__country"]}
                  classNamePrefix={styles["signup__form__input"]}
                />
              </div> */}

              <div>
                <label>Telephone Number: &nbsp;</label>
                <input
                  // ref={numberRef}
                  value={telNumber}
                  type="text"
                  placeholder="Telephone Number"
                  onChange={(event) => {
                    handleTelNumberChange(event);
                  }}
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className={styles["register-btn"]}
                  id="signup-button"
                >
                  Register
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
