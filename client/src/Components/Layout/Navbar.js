import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/">
          Motor
        </Link>
        <Link className="option" to="/">
          Temperature
        </Link>

        <Link className="option" to="/">
          LED Count
        </Link>

        <Link className="option" to="/">
          Buzzer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
