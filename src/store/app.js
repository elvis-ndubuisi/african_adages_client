import { writable, readable } from "svelte/store";

const authState = {
  isAuth: !sessionStorage.getItem("user") ? false : true,
  user: sessionStorage.getItem("user"),
};

// export const appError = writable({ stat, reason });
export const auth = writable(authState);
export const user = writable(sessionStorage.getItem("user"));
