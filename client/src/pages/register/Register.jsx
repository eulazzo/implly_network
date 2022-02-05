import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useHistory } from "react-router";

export const Register = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const username = useRef();
  const history = useHistory();

  const registerHandler = async (event) => {
    event.preventDefault();

    if (password.current.value === confirmPassword.current.value) {
      const userCredentials = {
        email: email.current.value,
        password: password.current.value,
        username: username.current.value,
      };
      try {
        await axios.post("/auth/register", userCredentials);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    } else {
      password.current.setCustomValidity("Passwords don't match!");
    }
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
        <form className="loginRight" onSubmit={registerHandler}>
          <div className="loginBox">
            <input
              required
              placeholder="Username"
              minLength="3"
              type="text"
              ref={username}
              className="loginInput"
            />
            <input
              required
              placeholder="Email"
              ref={email}
              type="email"
              className="loginInput"
            />
            <input
              required
              placeholder="Password"
              minLength="6"
              ref={password}
              type="password"
              className="loginInput"
            />
            <input
              required
              minLength="6"
              ref={confirmPassword}
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <hr className="loginHr" />
            <Link to="/login" style={{ textAlign: "center" }}>
              <button className="loginRegisterButton" type="submit">
                Log into Account
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
