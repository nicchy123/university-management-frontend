import { authKey } from "@/constants/storageKey";
import { decodeToken } from "@/utils/jwt";
import { setToLocastorage, getFromLocastorage } from "@/utils/local-storage";

const storeUserInfo = (accesToken: string) => {
  return setToLocastorage(authKey, accesToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocastorage(authKey);
  if (authToken) {
    const decoded = decodeToken(authToken);
    return decoded;
  } else {
    return "";
  }
};

export const isLoggedIn = ()=>{
    const authToken = getFromLocastorage(authKey);
    return !!authToken;
}

export default storeUserInfo;
