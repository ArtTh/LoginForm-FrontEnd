import axios from "axios";

const API_URL = "http://localhost:5000/api/user/";

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        window.localStorage.setItem(
          "user",
          JSON.stringify(response.data.token)
        );
        console.log(response.data);
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("state");
};

export default {
  login,
  logout,
};
