import { writable, readable } from "svelte/store";

export const appError = writable({ stat, reason });
export const user = writable(null);
