import React from "react";
import { Link } from "react-router-dom";

export default function MethodOfWork() {
  return (
    <div className="speak">
      <div className="container">
        <h1>HOW DOES OUR METHOD WORK?</h1>
        <div className="row">
          <div className="col-sm-4 mx-auto btext2">
            <p>
              Speak 5 teaches you English through <span> full immersion </span>in live 1-on-1
              classes with <span> native teachers </span>, including:
            </p>
            <p>
              <span> Live classes 1 to 1 with native teachers .</span> Each class lasts 30
              minutes and you can take 5 classes per week, <span>any day </span> , including
              Saturdays and Sundays.
            </p>
            <p>
              5 levels ranging from <span> complete beginner to advanced ,</span> from A1 to
              C2, based on the Common European Framework and based on the
              Cambridge curriculum
            </p>
            <p><span> Voice recognition </span>to make sure you pronounce correctly</p>
            <p>A <span> certificate </span> for each level completed</p>
            <p>Progress tracking... and much more</p>
            <Link className="link" to = "/signup"><button className="btn regbtn">
              CHANGE YOUR LIFE AND LEARN ENGLISH NOW
            </button></Link>
          </div>
          <div className="col-sm-4 mx-auto ptext2">
            <img src="https://www.speak5.com/assets/images/art-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
