"use client";
import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/jwt";
import { setToLocalstorage, getFromLocalstorage } from "@/utils/local-storage";

const storeUserInfo = (accesToken: string) => {
  return setToLocalstorage(authKey, accesToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalstorage(authKey);
  if (authToken) {
    const decoded = decodeToken(authToken);
    return decoded;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalstorage(authKey);
  return !!authToken;
};

export default storeUserInfo;
