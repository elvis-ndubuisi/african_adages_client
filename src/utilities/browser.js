export const setSessionStorage = (key, value) => {
  if (key && typeof key !== "string") {
    key = key.toString();
    typeof value === "object"
      ? sessionStorage.setItem(key, JSON.stringify(value))
      : sessionStorage.setItem(key, value);
  }
};

export const getSessionStorage = (key) => {
  if (key && typeof key !== "string") {
    key = key.toString();
    return sessionStorage.getItem(key);
  }
};

export const clearSessionStorage = () => {
  sessionStorage.clear();
};
