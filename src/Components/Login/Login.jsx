import React, { useState } from "react";
import "./login.modules.css";
const signup = (
  <div>
    <div className="f-l">
      <input type="text" placeholder="First Name*"></input>
      <input type="text" placeholder="Last Name*"></input>
    </div>
    <div className="col-grup">
      <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="setpasssword"></input>
    </div>
    <button
      className="logbtns"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      submit
    </button>
  </div>
);
const signin = (
  <div>
    <div className="col-grup">
      <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="setpasssword"></input>
    </div>
    <button
      className="logbtns"
      onClick={(e) => {
        e.preventDefault();
      }}
    >
      submit
    </button>
  </div>
);

function Login() {
  const [userExist, setuserExist] = useState(false);
  const [isloged, notlogged] = useState(false);
  const signInHandler = (e) => {
    e.preventDefault();
    setuserExist(!userExist);
    notlogged(!isloged);
  };
  return (
    <div>
      <form className="log-frm">
        <div className="log-btns">
          <button
            className="logbtns"
            onClick={signInHandler}
            style={{ backgroundColor: isloged ? "coral" : " #2f4149" }}
          >
            Signup
          </button>
          <button
            className="logbtns"
            onClick={signInHandler}
            style={{ backgroundColor: isloged ? "#2f4149" : "coral" }}
          >
            Login
          </button>
        </div>
        {userExist ? signin : signup}
      </form>
    </div>
  );
}

export default Login;
