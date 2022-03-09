import React from "react";
import "./NavStyle.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <div className="navbar-container">
      <div className="container-fluid d-flex align-items-center justify-content-between p-3">
        <div className="logo">
          <Link className="link" to = "/"><img src="https://speak5.com/assets/images/logo.png" alt="" />
          </Link>
          </div>
        <nav className="navbar-hide-display">
          <ul className="navbar mt-3">
            <Link className="link" to="/begining">
              <li className="text-uppercase">Beginning</li>
            </Link>
            <Link className="link" to="/ourmethod">
              <li className="text-uppercase">our method</li>
            </Link>
            <Link className="link" to="/us">
              <li className="text-uppercase">us</li>
            </Link>
            <Link className="link" to="/prices">
              <li className="text-uppercase">prices</li>
            </Link>
            <Link className="link" to = "/help">
              <li className="text-uppercase">help</li>
            </Link>
          </ul>
        </nav>
        <div className="navbar-buttons">
          <div className="mx-2">
            <Link className="link" to ="/signin"><button className="navbar-btn-1 ml-2">Enter</button></Link>
          </div>
          <div>
            <Link className="link" to = "/signup"><button className="navbar-btn-2">Register</button>
            </Link>
            </div>
        </div>
        <i className="bi bi-list listicon" onClick={() => props.setside()}></i>
      </div>
    </div>
  );
}
