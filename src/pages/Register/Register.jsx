import React, { Fragment, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { url } from "../../constants/url";

const Register = () => {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [onSuccess, setOnSuccess] = useState(false);

  const navigate = useNavigate();

  const navigateLogin = () => {
    setTimeout(() => {
      navigate("/login", { replace: true });
    }, 5000);
  };

  const registerHandler = async (event) => {
    event.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!firstName || !lastName || !email || !password) return;
    try {
      const response = await axios.post(`${url}/register`, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data.status === "success") {
        setOnSuccess(true);
        navigateLogin();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="register">
        {onSuccess && (
          <span style={{ color: "green" }}>
            You have logged in successfully
          </span>
        )}
        <h4>Register</h4>
        <form
          onSubmit={(event) => {
            registerHandler(event);
          }}
        >
          <div>
            <label>First Name</label>
            <input
              ref={firstNameRef}
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              ref={lastNameRef}
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input ref={emailRef} type="email" placeholder="Email" required />
          </div>
          <div>
            <label>Password</label>
            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Register;
