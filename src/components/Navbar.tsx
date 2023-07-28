import React, { FC } from "react";
import "../styles/navbar.scss";
import logo from "../assets/logo.png";

const Navbar: FC = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Logo" className="logo" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
