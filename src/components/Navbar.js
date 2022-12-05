import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navb">
        <div className="nav-left"></div>
        <div className="nav-right">
          <a href="https://www.youtube.com/" target="blank">
            Youtube.com
          </a>
        </div>
        <div className="nav-center">Website</div>
      </div>
    </>
  );
};

export default Navbar;
