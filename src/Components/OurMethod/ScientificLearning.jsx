import React from "react";
import { Link } from "react-router-dom";

export default function ScientificLearning() {
  return (
    <div className="container begin">
      <div className="row">
        <div className="col-sm-4 mx-auto">
          <img
            className="i1"
            src="https://www.speak5.com/assets/images/art-4.png"
            alt=""
          />
        </div>
        <div className="col-sm-4 mx-auto">
          <h1>SCIENTIFIC LEARNING</h1>

          <p>
            You will begin your learning by absorbing key words and concepts
            that native speakers use every day. This way you will ensure that
            the English you speak is from the real world, and that you can use
            it on a daily basis in various everyday situations.
          </p>
          <p>
            Afterwards, you will receive immediate feedback on your
            pronunciation and way of speaking, so that you can make sure that
            you learn the correct way.
          </p>
          <Link className="link" to = "/signup"> <button className="btn regbtn"> REGISTER NOW</button>
        </Link></div>
      </div>
    </div>
  );
}
