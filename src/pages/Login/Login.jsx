import React, { Fragment, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Auth } from "../../context/auth";
import { url } from "../../constants/url";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useContext(Auth);

  const saveDataToStorage = (response) => {
    localStorage.setItem(
      "userData",
      JSON.stringify({
        token: response.data.token,
        user: response.data.userDataObject,
      })
    );
  };

  const authenticate = (response) => {
    setAuthUser({
      user: response.data.userDataObject,
      token: response.data.token,
      isLoggedIn: true,
    });
  };

  const navigateTodo = () => {
    navigate("/todos", { replace: true });
  };

  const loginHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) return;
    try {
      const response = await axios.post(`${url}/login`, {
        email: email,
        password: password,
      });
      console.log(response);
      if (response.data.status === "fail") {
        setError(response.data.message);
        setTimeout(() => {
          setError("");
        }, 5000);
      }
      if (response.data.status === "success") {
        saveDataToStorage(response);
        authenticate(response);
        navigateTodo();
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Fragment>
      <div className="login">
        {error && <span style={{ color: "red" }}>{error}</span>}
        <h4>Login</h4>
        <form onSubmit={(event) => loginHandler(event)}>
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
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
