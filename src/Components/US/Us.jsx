import React from "react";
import "./Us.css";
import Speak5 from './Speak5';
import TrustToLearn from "./TrustToLearn";
import Usvideos from "./Usvideos";
import Hesitate from "./Hesitate";
import { Link } from "react-router-dom";

export default function Us() {
  return (
    <div className="container-fluid">
      <div className="container begin">
        <div className="row">
          <div className="us col-sm-6 mx-auto">
            <h1>YOU MAY BE WONDERING WHAT OR WHO IS SPEAK 5?</h1>
            <p>
              Before investing in your education with us, it is only fair that
              you know who we are and why we are your best option to learn
              English.
            </p>
            <Link className="link" to = "/signup"> <button className="btn regbtn">REGISTER NOW</button></Link>
          </div>
        </div>
      </div>
        <Speak5/>
        <TrustToLearn/>
        <Usvideos/>
        <Hesitate/>
    </div>
  );
}
