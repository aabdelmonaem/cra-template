import axios from "axios";

const API_URL = process.env.REACT_APP_API_KEY + "/api/auth/";

const signin = (username, password) => {
 return axios
  .post(API_URL + "signin", {
   username,
   password,
  })
  .then((response) => {
   return response.data;
  });
};

const signout = () => {
   console.log('signout');
};

const getCurrentUser = () => {
 return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
 signin,
 signout,
 getCurrentUser,
};

export default AuthService;
