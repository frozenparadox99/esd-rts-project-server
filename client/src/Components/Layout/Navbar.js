import React from "react";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Motor</li>
          <li>Buzzer</li>
          <li>Temperature</li>
          <li>LED</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
