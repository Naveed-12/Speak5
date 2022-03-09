import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row homecont1">
        <div className="col-sm-4 mx-auto ttt">
          <h3>FAMOUS LINGUIST PAUL PIMSLEUR REVEALS</h3>
          <h1>THE SECRET THAT GUARANTEES SPEAKING FLUENT ENGLISH</h1>
          <p>
            <span>Regardless of your age, your current level,</span>and
            regardless of whether{" "}
            <span> you've tried to learn for years and failed</span>
            multiple times. Our method and classes with
            <span> live native teachers</span>
            <p>help you start speaking English from your first class</p>
          </p>
          <Link className="link" to = "/signup"><button className="btn regbtn">Register now</button>
          </Link>
          </div>
        <div className="col-sm-4 homecont2 mx-auto">
            <img src="https://www.speak5.com/assets/images/art-6.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
