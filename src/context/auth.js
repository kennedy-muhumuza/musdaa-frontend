import { createContext } from "react";

export const auth = createContext({
  user: {},
  isLoggedIn: false,
  token: null,
});
