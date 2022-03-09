import React from "react";
import { Link } from "react-router-dom";

export default function DisplayPreinter(props) {
  return props.lessons.map((lesson, index) => (
    <div className=" col-lg-3 main ">
      <Link className="link" to="/preinterlevel" onClick={()=>props.setbeginner(index+1,lesson)}>
        <div className="shadow lbox mx-2">
          <img src={lesson.image} alt="" />
          <p> 
            <span>{index + 1 + ":"}</span>
            {lesson.title}
          </p>
        </div>
      </Link>
      <div className="info">
        <p>{lesson.info}</p>
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: lesson.percent + "%" }}
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            {lesson.percent}
          </div>
        </div>
      </div>
    </div>
  ));
}
