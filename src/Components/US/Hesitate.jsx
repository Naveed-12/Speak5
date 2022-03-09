import React from "react";
import { Link } from "react-router-dom";

export default function Hesitate() {
  return (
    <div className="container begin">
      <div className="row">
        <div className="tt">
          <h1>DO NOT HESITATE ANYMORE AND LEARN ENGLISH WITH US</h1>
          <p>
            And realize why{" "}
            <span> we are the best option to learn English</span>
          </p>
        </div>
        <div className="col-sm-4 x-auto">
          <img
            className="i2"
            src="https://www.speak5.com/assets/images/art-2.png"
            alt=""
          />
        </div>
        <div className="col-sm-4 x-auto btext" style={{marginLeft:"30px"}}>
          <p>
            Time is very valuable, more than money or any other material good.
            <span> Money comes and goes, but time doesn't .</span> So don't waste any more
            time and money trying to learn with courses and methods that don't
            work, and instead become fluent with our native teachers!
          </p>
          <p>
            Worst case scenario, you don't like the course and you only lose a
            month and get rid of us easily (since we don't let you down with
            ridiculous forced deadlines like other online schools). Or in the
            best case, see how you start speaking English from the first class
            and become more fluent in no time!
          </p>
          <Link className="link" to = "/signup"><button className="btn regbtn" >PRACTICE EGLISH RIGHT NOW</button></Link>
        </div>
      </div>
    </div>
  );
}
