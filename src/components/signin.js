import React from "react";
import { useState } from "react";
import "./signin.css";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import axios from "axios";

function Signin() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const history = useNavigate();

  const signin = (e) => {
    e.preventDefault();
    const data = { Email, Password };
    console.log(data);

    axios.post("http://localhost:5000/api/home/getuser", data).then((res) => {
      if (res.status === 400) {
        alert("Wrong Credintials");
        return;
      } else {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        history("/Viewdata");
      }
    });
  };

  return (
    <>
      <div class="container">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="card">
          <h4 class="title">Sign in</h4>
          <div class="form-input">
            <label for="e">Username</label>
            <input
              type="email"
              placeholder="Email"
              id="e"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-input">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="p"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input type={"checkbox"} />
            &nbsp;Remember Me
          </div>
          <button onClick={signin} class="login-btn">
            Log in
          </button>
          <div className="text-center">
            <a className="forgot1" href="/signup">
              Register
            </a>
            <a className="forgot" href="/bamboozled">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
