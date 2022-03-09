import React from "react";
import { Link } from "react-router-dom";

export default function LearnEnglish() {
  return (
    <div className="container begin">
      <div className="row">
        <div className="col-sm-4 mx-auto">
          <img
            className="i1"
            src="https://www.speak5.com/images/3image.png"
            alt=""
          />
        </div>
        <div className="col-sm-4 mx-auto btext">
          <h1>LEARN ENGLISH AS IF YOU LIVED IN NEW YORK OR LONDON</h1>
          <p>
            Speak 5 has developed a total immersion method with native English
            teachers, 1-to-1, plus a multimedia platform, which together have
            become an experience very similar to learning English in the USA or
            England. You can learn with your native teachers in live classes,
            1-on-1, totally online. Each class lasts 30 minutes and you can take
            5 per week from your PC, laptop, tablet or phone
          </p>
          <Link className="link" to = "/signup"><button className="btn regbtn"> REGISTER NOW</button></Link>
        </div>
      </div>
    </div>
  );
}
