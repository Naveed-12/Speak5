import React from "react";
import { Link } from "react-router-dom";

export default function Prices() {
  return (
    <div className="container begin">
      <div className="row">
        <div className="col-sm-4 mx-auto btext">
          <h1>HOW MUCH DOES SPEAK 5 COST?</h1>
          <p>
            We have different plans to adapt to your needs and goals. But don't
            worry, we're not going to harass you with calls like some schools
            do. Better we will tell you at this moment our prices and benefits
          </p>

          <Link className="link" to = "/signup"><button className="btn regbtn">REGISTER NOW</button>
        </Link></div>
        <div className="col-sm-4 mx-auto">
          <img
            className="i2"
            src="https://www.speak5.com/assets/images/art-5.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
