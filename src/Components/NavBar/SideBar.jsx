import React from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";

export default function SideBar(props) {
  return (
    <div>
      {props.check && (
        <nav className="my-nav">
          <a href="#" class="my-btn">
            <i class="bi bi-x" onClick={() => props.setside()}></i>
          </a>
          <ul className="my-ul">
            <Link className="link" to="/begining">
              <li>
                <a className="text-uppercase">Beginning</a>
              </li>
            </Link>
            <Link className="link" to="/ourmethod">
             <li>
                <a className="text-uppercase">Our Method</a>
              </li>
            </Link>
            <Link className="link" to  = "/us"><li>
              <a className="text-uppercase">Us</a>
            </li></Link>
            <Link className="link" to  ="/prices"><li>
              <a className="text-uppercase">prices</a>
            </li></Link>
            <Link className="link" to = "/help"><li>
              <a className="text-uppercase">help</a>
            </li></Link>
          </ul>
        </nav>
      )}
    </div>
  );
}
