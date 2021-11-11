import "./register.css";

export const Register = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sigma</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sigma
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" type="email" className="loginInput" />
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="email" className="loginInput" />
            <input
              placeholder="Confirm Password"
              type="password"
              className="loginInput"
            />
            <button className="loginButton">Sign Up</button>
            <hr className='loginHr'/>
            <button className="loginRegisterButton">
              Log into Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
