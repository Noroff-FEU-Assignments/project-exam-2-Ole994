import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../pictures/logo.svg";

const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div>
        <nav>
          <div className="logo-div">
            <a href="/">
              <img className="logo-img" src={logo} alt="logo" />
            </a>
          </div>{" "}
          <div
            className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          {""}
          <ul className="nav-links">
            {" "}
            <li>
              {" "}
              <Link to="/">Hjem |</Link>
            </li>
            {""}
            {""}
            <li>
              {" "}
              <Link to="/Contact">Kontakt oss |</Link>
            </li>{" "}
            <li>
              {" "}
              <Link to="/Login">Login |</Link>
            </li>
            <li>
              {" "}
              <Link to="/Result">Hotellrom |</Link>
            </li>
          </ul>
          {isNavExpanded && (
            <ul className="nav-mobile">
              {" "}
              <li>
                {" "}
                <Link to="/">Hjem</Link>
              </li>
              {""}
              <li>
                {" "}
                <Link to="/Contact">Kontakt</Link>
              </li>{" "}
              <li>
                {" "}
                <Link to="/Login">Login</Link>
              </li>
              <li>
                {" "}
                <Link to="/Result">Hotelrom</Link>
              </li>
              {/* <Link to="/Search">Hoom</Link> */}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
