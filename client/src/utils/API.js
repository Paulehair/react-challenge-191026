import axios from "axios";
const dotenv = require('dotenv');

// dotenv.config({
//   path: '../../../config.env'
// })
// const port = process.env.PORT;
// console.log("port", port);

const headers = {
  "Content-Type": "application/json"
};
const burl = `http://localhost:9000/api/v1/users/login`;

export default {
  login: function(email, password) {
    return axios.post(
      `${burl}`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  signup: function(send) {
    return axios.post(`${burl}/user/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};
