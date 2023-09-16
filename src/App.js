import React, { Fragment } from "react";
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
import SliderComponent from "./components/UI/slider/SliderComponent";
import "./App.scss";
import About from "./pages/aboutPage/AboutPage";
import AdminTokens from "./pages/adminTokens/AdminTokens";
import Loggedhomepage from "./components/UI/loggedHomePage/LoggedHomePage";
import { Form } from "./pages/form/Form";
import AdminPage from "./pages/AdminPage/AdminPage";
import { Links } from "./pages/Home/Links";

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const userRole = useSelector(
    (state) => state.auth.user && state.auth.user.userRole
  );
  console.log(isLoggedIn);
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
              {/* -------------------casual links--------------------------- */}
              <Route path="/logged-in" element={<Loggedhomepage />} />
              <Route path="/admin-tokens" element={<AdminTokens />} />
              <Route path="/form" element={<Form />} />
              <Route path="/admin-page" element={<AdminPage />} />
              <Route path="/links" element={<Links />} />

              {/* -------------------casual links--------------------------- */}

              <Route
                path="register"
                element={
                  <div>
                    <Register />
                  </div>
                }
              />
              <Route path="slider" element={<SliderComponent />} />
              <Route path="login" element={<Login />} />
              <Route path="about" element={<div>About Page</div>} />

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
              {/* <Route path="/admin-resources" element={<AdminHomePage />} /> */}

              {userRole === "admin" && (
                <>
                  {/* <Route index element={<AdminHomePage />} /> */}
                  <Route path="/admin-resources" element={<AdminHomePage />} />
                  <Route
                    path="*"
                    element={<Navigate to="/admin-resources" replace />}
                  />
                </>
              )}

              {userRole === "user" && (
                <>
                  <Route path="/resources" element={<LoggedUserPage />} />
                  <Route
                    path="*"
                    element={<Navigate to="/resources" replace />}
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
