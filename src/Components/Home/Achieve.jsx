import React from "react";
import ReactPlayer from "react-player";

export default function Achieve() {
  return (
    <div className="container-fluid Achieve">
      <h1>Achieve More Fluency, Guaranteed</h1>
      <div className="row acheivecont">
        <div className="col-md ">
          <ReactPlayer
          width={"70%"}
          height={"100%"}
            controls
            url={"https://www.youtube.com/watch?v=o5K_S1wd_CE"}
          />
        </div>
        <div className="col-md ">
        <div className="texts">  
        <p>
            See with your own eyes how one of our students, Mariana, achieved
            fluency in the language after taking the Speak 5 course. You can do
            it too if you put your mind to it :)
          </p>
          <h3>“Mariana Dominguez - Colombia”</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
