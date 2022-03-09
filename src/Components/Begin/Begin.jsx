import React from "react";
import "./Begin.css";
import SpeakEnglish from "./SpeakEnglish";
import LearnEnglish from "./LearnEnglish";
import Fluency from "./Fluency";
import StudentSays from "./StudentSays";
import Video from "./Video";
import { Link } from "react-router-dom";

export default function Begin() {
  return (
    <div className="container-fluid">
      <div className="container begin">
        <div className="row">
          <div className="col-sm-4 mx-auto">
            <img
              className="i1"
              src="https://www.speak5.com/images/Laura%20with%20monkey.png"
              alt=""
            />
          </div>
          <div className="col-sm-4 mx-auto btext">
            <h1>
              WITH SPEAK YOU WILL BE{" "}
              <img
                src="https://www.speak5.com/assets/images/icons/icon-5.png"
                alt=""
              />{" "}
              ABLE TO SPEAK ENGLISH FLUENTLY
            </h1>
            <p>
              Speak 5 offers you an online course with live classes 1 to 1 that
              will help you raise your level of English and obtain your first
              certificate in just 2 months. You can learn anywhere and anytime
              thanks to a multimedia platform and native teachers who will help
              you speak English with confidence and fluency.
            </p>
            <Link className="link" to = "/signup"><button className="btn regbtn"> REGISTER NOW</button></Link>
          </div>
        </div>
      </div>
        <SpeakEnglish/>
        <LearnEnglish/>
        <Fluency/>
        <StudentSays/>
        <Video/>
    </div>
  );
}
