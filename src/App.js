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
import Todos from "./pages/Todos/Todos";
import Home from "./pages/Home/Home";
import { Auth } from "./context/auth";

import "./App.css";

function App() {
  const authenticated = useContext(Auth);

  const [authUser, setAuthUser] = useState(authenticated);

  useEffect(() => {
    const tryLogin = () => {
      const userData = localStorage.getItem("userData");
      if (userData) {
        const parsedData = JSON.parse(userData);
        setAuthUser({
          user: parsedData.user,
          token: parsedData.token,
          isLoggedIn: true,
        });
      }
    };
    tryLogin();
  }, []);

  const isLoggedIn = authUser.isLoggedIn;
  console.log("token");
  console.log(authUser.token);

  useEffect(() => {
    document.title = "Auth";
  }, []);

  return (
    <div className="App">
      <Auth.Provider value={[authUser, setAuthUser]}>
        <BrowserRouter>
          {!isLoggedIn && (
            <Routes>
              <Fragment>
                <Route path="/home" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route
                  path="signup"
                  element={<Navigate to="/register" replace />}
                />
                <Route
                  path="signin"
                  element={<Navigate to="/login" replace />}
                />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Fragment>
            </Routes>
          )}

          {isLoggedIn && (
            <Routes>
              <Fragment>
                {/* <Route path="/" element={<Todos />} /> */}
                <Route path="/todos" element={<Todos />} />
                <Route path="*" element={<Navigate to="/todos" replace />} />
              </Fragment>
            </Routes>
          )}
        </BrowserRouter>
      </Auth.Provider>
    </div>
  );
}

export default App;
