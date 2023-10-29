"use client";
import { authKey } from "@/constants/storageKey";

export const setToLocalstorage = (key: string, value: string) => {
  if (!key || typeof window === "undefined") {
    return "";
  }
  return localStorage.setItem(key, value);
};

export const getFromLocalstorage = (key: string) => {
  if (!key || typeof window === "undefined") {
    return;
  }
  return localStorage.getItem(key);
};

export const removeFromLocalstorage = (authKey) => {
  return localStorage.removeItem(authKey);
};
