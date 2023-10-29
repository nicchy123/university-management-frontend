"use client";
import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";

const storeUserInfo = (accesToken: string) => {
  return setToLocalStorage(authKey, accesToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    const decoded = decodeToken(authToken);
    return decoded;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export default storeUserInfo;
export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};