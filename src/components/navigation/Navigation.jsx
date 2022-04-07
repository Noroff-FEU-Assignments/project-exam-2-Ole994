import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";
const Navigation = () => {
  return (
    <div>
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
    </div>
  );
};

export default Navigation;
