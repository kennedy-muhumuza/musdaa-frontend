import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/auth";
import notificationSlice from "./reducers/notification";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

let baseUrl;
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseUrl = "http://localhost:5000";
} else {
  baseUrl = "https://letschat-backend.onrender.com";
}

export { baseUrl };

export default store;
export const authActions = authSlice.actions;
export const notificationActions = notificationSlice.actions;
