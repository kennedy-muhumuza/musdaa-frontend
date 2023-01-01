import React, { useEffect, createContext, useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Todos from "./pages/Todos/Todos";
import Home from "./pages/Home/Home";
import { auth } from "./context/auth";

import "./App.css";

function App() {
  const AuthContext = createContext();
  const authenticated = useContext(auth);

  // useEffect(() => {
  //   setAccessToken(() => sessionStorage.getItem("accessToken"));
  //   log(accessToken);
  // }, [accessToken]);

  const isLoggedIn = authenticated.isLoggedIn;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  const authRouter = createBrowserRouter([
    {
      path: "/todos",
      element: <Todos />,
    },
  ]);

  useEffect(() => {
    document.title = "Auth";
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={authenticated}>
        {!isLoggedIn && <RouterProvider router={router} />}
        {isLoggedIn && <RouterProvider router={authRouter} />}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
