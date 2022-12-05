import React, { useState } from "react";
import "./Home.css";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";

const Home = () => {
  const [fullName, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const newUser = (e) => {
    const data = { fullName, Email, Password };
    console.log(
      " Name is : " +
        data.fullName +
        " Email : " +
        data.Email +
        " Password is : " +
        data.Password
    );
    console.log("Pre-send");
    axios.post("http://localhost:5000/api/home/addUser", data).then((res) => {
      if (res.status === 400) {
        alert("Sign up invalid");
        return;
      } else {
        sessionStorage.setItem("user", JSON.stringify(res.data));
        console.log("Post-send");
      }
    });
  };

  return (
    <>
      <br></br>
      <br></br>
      <div className="midpagesignin">
        <MDBContainer>
          <br />
          <h4>
            <div className="hometitle">Create new account</div>
          </h4>
          <br />
          <MDBInput
            wrapperClass="mb-4"
            className="inputs"
            placeholder="Full name"
            id="f"
            type="text"
            value={fullName}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            className="inputs"
            placeholder="Email"
            id="e"
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <MDBInput
            wrapperClass="mb-4"
            className="inputs"
            placeholder="Password"
            id="p"
            type="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <h1>
            <button
              className="signinbutton"
              onClick={(e) => {
                newUser();
              }}
            >
              Sign up
            </button>
          </h1>
          <a className="text-center" href="/">
            Already have an account?
          </a>
        </MDBContainer>
      </div>
    </>
  );
};

export default Home;
