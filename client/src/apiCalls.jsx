//This could be in the login page.

import axios from "axios";
import { loginStart, loginSuccess, loginFailure } from "./context/AuthActions";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch(loginStart());

  try {
    const response = await axios.post("auth/login", userCredentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error));
  }
};
