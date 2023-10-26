import { authKey } from "@/constants/storageKey";

export const setToLocastorage = (key: string, value: string)=>{
    if(!key || typeof window === "undefined") return ""
    return localStorage.setItem(key, value)
}

export const getFromLocastorage = (key: string) => {
    //  if (!key || typeof window === "undefined") {
    //    return "";
    //  }
  return localStorage.getItem(key);
};

export const removeFromLocastorage = () => {
     
  return localStorage.removeItem(authKey);;
};

 