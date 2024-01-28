import axios from "axios";
//require('dotenv').config()



export const LOGIN_USER_KEY = "CHURCH_WEBSITE_LOGIN_USER_KEY";
// const { REACT_APP_ENVIRONMENT, REACT_APP_API_BASE_URL_PROD, REACT_APP_API_BASE_URL_DEV } = process.env;
var baseURL ;
baseURL='http://127.0.0.1:8000' 

// if (REACT_APP_ENVIRONMENT === "PRODUCTION") {
// 	baseURL = REACT_APP_API_BASE_URL_PROD;
// } else {
// 	baseURL = REACT_APP_API_BASE_URL_DEV;
// }
//console.log(process.env.LOGIN_USER_KEY)
const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    if (config.requireToken) {
      const user = localStorage.getItem(LOGIN_USER_KEY)
        ? JSON.parse(localStorage.getItem(LOGIN_USER_KEY))
        : null;
      config.headers.common["Authorization"] = user.token;
    }

    return config;
  },
  (err) => console.error(err)
);

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // (error) => {
  //   console.log("error.response", error);
  //   if (error.response.status === 401) {
  //     localStorage.removeItem(LOGIN_USER_KEY);
  //   }

  //   return Promise.reject(error);
  // }
);

export default class API {
  signUp = async (signUpBody) => {
    const formData = new FormData();

    for (const key in signUpBody) {
      formData.append(key, signUpBody[key]);
    }

    return api.post("/signup/", formData);
  };

  signIn = async (signInBody) => {
    const formData = new FormData();
    for (const key in signInBody) {
      formData.append(key, signInBody[key]);
    }
    return api.post("/signin/", formData);
  };
}