import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
} from "../ActionTypes";


//Auth
export const setLoginSuccess = (payload) => ({type: LOGIN_USER_SUCCESS, payload,});

export const loginUser = (payload, cb) => {
  console.log("login")
  return (dispatch) => {
    
    api
      .post("/auth/login", payload)
      .then((res) => {
          dispatch(setLoginSuccess(res.data));
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
