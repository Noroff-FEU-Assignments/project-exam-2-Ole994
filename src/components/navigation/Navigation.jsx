import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";

const Navigation = () => {
  return (
    <>
      <div>
        <nav>
          <div className="logo-div">
            <a href="/">
              <img className="logo-img" src="/" alt="" />
            </a>
          </div>{" "}
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {""}
          <ul className="nav-links">
            {" "}
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            {""}
            <Link to="/Detail"></Link>
            {""}
            <li>
              {" "}
              <Link to="/Contact">Contact</Link>
            </li>{" "}
            <Link to="/Admin"></Link>
            <li>
              {" "}
              <Link to="/Login">Login</Link>
            </li>
            <li>
              {" "}
              <Link to="/Result">Result</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
{
  /* <div>
      
      </div>
    </div> */
}
