import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const loginHandler = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sigma</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sigma
          </span>
        </div>
        <form className="loginRight" onSubmit={loginHandler}>
          <div className="loginBox">
            <input
              ref={email}
              required
              placeholder="Email"
              type="email"
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              type="password"
              minLength="6"
              className="loginInput"
              required
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="#fff" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <hr className="loginHr" />
            <button className="loginRegisterButton">
            {isFetching ? (
                <CircularProgress color="#fff" size="20px" />
              ) : (
                "Create a new Account"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
