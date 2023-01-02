import { createContext } from "react";

export const Auth = createContext({
  user: {},
  isLoggedIn: false,
  token: null,
});
