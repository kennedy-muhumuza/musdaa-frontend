import React, {
  Fragment,
  useEffect,
  createContext,
  useContext,
  useState,
} from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import LoggedUserPage from "./pages/loggedUserPage/LoggedUserPage";
import Home from "./pages/Home/Home";
import { Auth } from "./context/auth";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Layouts/header/Header";
import AdminDashBoard from "./pages/AdminDashBoard/AdminDashBoard";
import { authenticate } from "./store/actions/auth";
import RegisterAdmin from "./pages/RegisterAdmin/RegisterAdmin";
import AdminHomePage from "./pages/AdminPage/AdminPage";

import "./App.scss";
import About from "./pages/about/About";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const userRole = useSelector(
    (state) => state.auth.user && state.auth.user.userRole
  );

  const userDataFromStorage = JSON.parse(localStorage.getItem("userData"));
  const navigationTypeReload =
    performance.getEntriesByType("navigation")[0].type === "reload";

  // update the redux store on page reload
  if (navigationTypeReload && userDataFromStorage) {
    const { user, token } = userDataFromStorage;
    dispatch(authenticate(user, token));
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* ---------------------ACCESSIBLE ROUTES WHEN NOT LOGGED IN------------------------------- */}
        {!isLoggedIn && (
          <Routes>
            <Fragment>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route
                path="register"
                element={
                  <div>
                    <Register />
                  </div>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<About />} />
              <Route
                path="signup"
                element={<Navigate to="/register" replace />}
              />
              <Route path="signin" element={<Navigate to="/login" replace />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
              <Route path="register-admin" element={<RegisterAdmin />} />
            </Fragment>
          </Routes>
        )}

        {/* -----------------ACCESSIBLE ROUTES WHEN LOGGED IN---------------------------- */}
        {isLoggedIn && (
          <Routes>
            <Fragment>
              <Route path="/resources" element={<LoggedUserPage />} />
              <Route path="*" element={<Navigate to="/resources" replace />} />

              {userRole === "admin" && (
                <>
                  <Route path="/" element={<AdminHomePage />} />
                  <Route path="/admin-resources" element={<AdminHomePage />} />
                  <Route
                    path="*"
                    element={<Navigate to="/admin-resources" replace />}
                  />
                </>
              )}
            </Fragment>
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
