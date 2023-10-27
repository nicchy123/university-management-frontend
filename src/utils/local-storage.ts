import { authKey } from "@/constants/storageKey";

export const setToLocastorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") return "";
  const item = localStorage.setItem(key, value);
  return item;
};

export const getFromLocastorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item;
};

export const removeFromLocastorage = () => {
  const item = localStorage.removeItem(authKey);
  return item;
};
