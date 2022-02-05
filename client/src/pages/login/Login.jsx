import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { Link } from "react-router-dom";

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

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Implly</h3>
          <span className="loginDesc">
            Everybody has something <b className="pinned">GOOD</b> to{" "}
            <b className="pinned">SHARE</b>
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
