import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../ActionTypes";
import api from "../../resources/api";
import axios from 'axios'

//Auth
export const setLoginSuccess = (payload) => ({type: LOGIN_USER_SUCCESS, payload,});

export const loginUser = (payload, cb) => {
  console.log("login",payload)
  return (dispatch) => {
    axios.post("http://localhost:8000/api/auth/login")
      .then((res) => {
        console.log(res,"res")
          cb(null, {
            message: "Logged In",
          });
      })
      .catch((err) => {
        console.log(err);
        cb({
          message: err.response.data.message,
        });
      });
  };
};




export const logoutUser = (payload) => ({ type: LOGOUT_USER, payload });
