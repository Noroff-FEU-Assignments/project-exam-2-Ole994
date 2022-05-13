import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../../pictures/logo.svg";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { deleteFromLocalstorage } from "../../utils/helpersLocalStorage";

import { useContext } from "react";
const Navigation = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth(null);

    // deleteFromLocalstorage("jwt");

    navigate("/login");
  };
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
            <li
              onClick={() => {
                if (isNavExpanded) return false;
              }}
            >
              {" "}
              <Link to="/">Hjem </Link>
            </li>
            {""}
            <li>
              {" "}
              <Link to="/Contact">Kontakt oss </Link>
            </li>{" "}
            <li>
              {!auth ? (
                <Link to={"/login"}>Login</Link>
              ) : (
                <button className="defaultBtn" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </li>
            {""}
            {""}
            {/* Mobile */}
            <li>
              {" "}
              <Link to="/Result">Hotellrom </Link>
            </li>
            <li>
              <Link to="/">Book hotellrom</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>
          {isNavExpanded && (
            <ul className="nav-mobile">
              {" "}
              <li>
                {" "}
                <Link
                  to="/"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Hjem
                </Link>
              </li>
              {""}
              <li>
                {" "}
                <Link
                  to="/Contact"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Kontakt
                </Link>
              </li>{" "}
              <li>
                {" "}
                <Link
                  to="/Result"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Hotelrom
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/Booking"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Book hotellrom
                </Link>
              </li>
              <li>
                <Link
                  to="/Admin"
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Admin
                </Link>
              </li>
              {!auth ? (
                <Link
                  to={"/login"}
                  onClick={() => {
                    setIsNavExpanded(false);
                  }}
                >
                  Login
                </Link>
              ) : (
                <li className="logout" onClick={handleLogout}>
                  Logout
                </li>
              )}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navigation;
