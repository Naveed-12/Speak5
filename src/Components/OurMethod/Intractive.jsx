import React from "react";
import { Link } from "react-router-dom";

export default function Intractive() {
  return (
    <div className="container begin">
      <div className="row">
        <div className="tt2">
          <h1>
            THOUSANDS OF INTERACTIVE EXERCISES AND DOZENS OF TOPICS TO CHOOSE
            FROM
          </h1>
          <p>
            That assure you that you will <span> learn real English </span> with
            your favorite topics
          </p>
        </div>
        <div className="col-sm-4 mx-auto" style={{marginBottom:"30px"}}>
          <img
            className="i1"
            src="https://www.speak5.com/assets/images/art-2.png"
            alt=""
          />
        </div>
        <div className="col-sm-4 mx-auto bbtext">
          <p>
            With Speak 5 you will not only have live classes and a multimedia
            course. With Speak 5 you will have <span> thousands of exercises, lessons,
            videos ,</span> and endless options to learn English with your personal
            style
          </p>
          <p>
            Do you like TV series? Then select this theme for your live class
            and enjoy talking and learning about your favorite series and
            movies. Do you like sports? Then select this option and enjoy
            talking and learning about sports in your 1 to 1 class. Learning
            English has never been so much fun
          </p>
          <Link className="link" to = "/signup"><button className="btn regbtn">PRACTISE ENGLISH RIGHT NOW</button>
        </Link></div>
      </div>
    </div>
  );
}
