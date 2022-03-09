import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

export default function LiveClasses() {
  return (
    <div className="container live">
      <h2>DO YOU WANT TO KNOW WHAT A LIVE CLASS IS LIKE?</h2>
      <p>
        Then watch this sample class of teacher Laura Annett with one of our
        students, and confirm once and for all that Speak 5 is your best option
        to speak English fluently.
      </p>
      <div className="video">
      <ReactPlayer
        width={"100%"}
        height = {"900px"}
        // className = "video"
        controls
        url={"https://www.youtube.com/watch?v=dOtqwZdhBkc"}
      />
      </div>
      <Link className="link" to = "/signup"><button className="btn enrollbtn">Enroll now, learn English and change your life now</button>
    </Link></div>
  );
}
