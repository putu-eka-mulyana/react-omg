import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
// import { decode } from "querystring";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("http://0.0.0.0:5000/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://0.0.0.0:5000/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
        dispatch({
           type:GET_ERRORS,
           payload:err.response.data 
        })
        );
}
export const setCurrentUser = decoded => {
    return {
        type:SET_CURRENT_USER,
        payload:decoded
    };
};
export const setUserLoading= () =>{
    return {
        type:USER_LOADING
    };
};
export const logoutUser =()=> dispatch=>{
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    
}
