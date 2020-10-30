import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

const getUserContent = () => {
  return axios.get(API_URL);
};

export default {
  getUserContent,
};
