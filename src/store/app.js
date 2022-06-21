import { writable, readable } from "svelte/store";

const authState = {
  isAuth: !sessionStorage.getItem("token") ? false : true,
  token: sessionStorage.getItem("token"),
  setToken: function (token) {
    sessionStorage.setItem("token", token);
  },
};

const toast = {
  isIncident: false,
  status: "",
  reason: "",
};

const modal = {
  shouldDisplay: "",
};

// export const appError = writable({ stat, reason });
export const auth = writable(authState);
export const notify = writable(toast);
export const modalStore = writable(modal);
export const curPage = writable("0");
