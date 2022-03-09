import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function Ovideo() {
  return (
    <div className="container bvideo">
      <h1>DO YOU WANT TO SEE WHAT A LIVE CLASS IS LIKE?</h1>
      <p>
        Then watch this sample class of teacher Helen with one of our students
        and confirm once and for all that Speak 5 is your best option to speak
        English fluently.
      </p>
      <div className="vv">
        <ReactPlayer
          controls
          url={"https://www.youtube.com/watch?v=U53BRSHFA9E"}
          width={"100%"}
          // height = {"100%"}
        />
      </div>
      <Link className="link" to = "/signup"><button className="btn regbtn">
        Enroll now, learn English and change your life now
      </button></Link>
    </div>
  );
}
