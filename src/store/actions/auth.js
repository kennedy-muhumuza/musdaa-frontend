import axios from "axios";
import { authActions } from "../reducers/auth";
// import { notificationActions } from "../reducers/notification";
import { url } from "../../constants/url";
// import { useNavigate } from "react-router-dom";

export const authenticate = (user, token, isLoggedIn, message, status) => {
  return async (dispatch) => {
    await dispatch(
      authActions.authenticate({
        token: token,
        isLoggedIn: isLoggedIn,
        user: user,
        message: message,
        status: status,
      })
    );
  };
};

export const logOut = () => {
  localStorage.clear();
  return async (dispatch) => {
    await dispatch(authActions.logout());
  };
};

const saveDataToStorage = (user, token, message, status) => {
  localStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      user: user,
      message: message,
      status: status,
    })
  );
};

//LogoutTimer and clearLogoutTimer(When jwt expire time is added)
// export const logOut = () => {
//   localStorage.clear();
//   return authActions.logout();
// };

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(`${url}/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message);
    }
    const data = await response.json();
    console.log("data");
    console.log(data);
    // get the expiry time  // to be done later
    await dispatch(
      authActions.authenticate({
        token: data.token,
        isLoggedIn: true,
        user: data.user,
        message: data.message,
        status: data.status,
      })
    );
    saveDataToStorage(data.user, data.token, data.message, data.status);
  };
};

//   AXIOS
// export const login = (email, password) => {
//   return async (dispatch) => {
//     const response = await axios.post(`${baseUrl}/login`, {
//       email: email,
//       password: password,
//     });
//     console.log(response);
//     if (response.data.errorMessage) {
//       await dispatch(
//         notificationActions.showNotification({
//           notificationMsg: response.data.errorMessage,
//         })
//       );
//       throw new Error(response.data.errorMessage);
//     }
//     // get the expiry time  // to be done later
//     await dispatch(
//       authActions.authenticate({
//         token: response.data.token,
//         user: response.data.user,
//       })
//     );
//     saveDataToStorage(response.data.user, response.data.token);
//   };
// };

export const signup = (
  firstName,
  lastName,
  email,
  country,
  telNumber,
  password,
  userRole
) => {
  return async (dispatch) => {
    const response = await fetch(`${url}/register`, {
      method: "POST",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        country,
        telNumber,
        password,
        userRole,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      // await dispatch();
      // notificationActions.showCardNotification({
      //   type: "error",
      //   message: error.message,
      // })
      // setTimeout(() => {
      //   dispatch(notificationActions.hideCardNotification());
      // }, [2000]);
      throw new Error(error.message);
    }

    // await dispatch(
    //   notificationActions.showCardNotification({
    //     type: "success",
    //     message: "Sign up successful, please login",
    //   })
    // );
    // setTimeout(() => {
    //   dispatch(notificationActions.hideCardNotification());
    // }, [5000]);
  };
};

// REGISTER ADMIN
export const registerAdmin = (
  adminToken,
  firstName,
  lastName,
  email,
  country,
  telNumber,
  password,
  userRole
) => {
  return async (dispatch) => {
    const response = await fetch(`${url}/register-admin`, {
      method: "POST",
      body: JSON.stringify({
        adminToken,
        firstName,
        lastName,
        email,
        country,
        telNumber,
        password,
        userRole,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      // await dispatch();

      throw new Error(error.message);
    }
  };
};

// staff Token validation
export const ValidateStaffToken = (staffToken) => {
  return async (dispatch) => {
    await dispatch(
      authActions.ValidateStaffToken({ StaffSignUpToken: staffToken })
    );
  };
};
