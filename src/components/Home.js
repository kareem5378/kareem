import React from "react";
import "./Home.css";

function Home() {
  return (
    <div>
      <br />
      <br />
      <div class="typewriter">
        <h1>Welcome.</h1>
      </div>
      <h2>Sign in to view data</h2>
      <div className="borders">
        <div className="pRedirect">
          Click &nbsp;
          <a className="abutton" href="/signin">
            here
          </a>
          &nbsp; to sign in
        </div>
        <div className="pRedirect">
          Click &nbsp;
          <a href="/signup" className="abutton">
            here
          </a>
          &nbsp; to create a new account
        </div>
      </div>
    </div>
  );
}
export default Home;
