import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function Video() {
  return (
    <div className="container bvideo">
      <h1>ARE YOU CURIOUS TO KNOW THE COURSE AND LIVE CLASSES?</h1>
      <p>
        We give you a tour of our platform so you can see the Speak 5 course in
        action, its levels, units, sections, as well as a live class. Just click
        on the video below and enjoy
      </p>
      <div className="vv">
      <ReactPlayer 
        controls
        url={"https://www.youtube.com/watch?v=U53BRSHFA9E"}
        width = {"100%"}
        // height = {"100%"}
      /></div>
      <Link className="link" to = "/signup"><button className="btn regbtn" style={{marginBottom:"30px"}}>Enroll now, learn English and change your life now</button>
      </Link>
    </div>
  );
}
