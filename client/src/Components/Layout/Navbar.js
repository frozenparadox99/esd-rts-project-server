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
        <Link className="option" to="/motor">
          Motor
        </Link>
        <Link className="option" to="/temperature">
          Temperature
        </Link>

        <Link className="option" to="/led">
          LED Count
        </Link>

        <Link className="option" to="/buzzer">
          Buzzer
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
