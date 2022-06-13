import { writable } from "svelte/store";

export const auth = writable(sessionStorage.getItem("token"));
