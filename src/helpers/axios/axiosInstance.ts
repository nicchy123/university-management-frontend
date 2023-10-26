import { authKey } from "@/constants/storageKey";
import { ResponceErrorType, ResponceSuccesType } from "@/types";
import { getFromLocastorage } from "@/utils/local-storage";
import axios from "axios";

const instance = axios.create();
instance.defaults.headers.post["content-type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    const accessToken = getFromLocastorage(authKey);
    if(accessToken){
        config.headers.Authorization = accessToken;
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// @ts-ignore
instance.interceptors.response.use(function (response) {

    const responseObject: ResponceSuccesType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  }, function (error) {
   const responceObject: ResponceErrorType = {
     statusCode: error.responce?.data?.statusCode || 500,
     messages: error.responce?.data?.messages || "Something went wrong",
     errorMessages: error.responce?.data?.messages,
   };
    return responceObject;
  });

export { instance };
