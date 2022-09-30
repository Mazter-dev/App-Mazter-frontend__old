import React from "react";
import Img from "../images/logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Menu = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              src={Img}
              alt="s"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/xd" className="navbar-brand">
                  Component XD
                </Link>
                <Link to="/gallery" className="navbar-brand">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Menu;
