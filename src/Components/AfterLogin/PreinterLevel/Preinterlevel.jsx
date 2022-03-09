import React from "react";
// import "./Beginnerlevel.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Preinterlevel(props) {
    console.log(props.index);
  const history = useHistory();
  const goback = () => {
    history.goBack();
  };
  return (
    <div className="container-fluid changeback">
      <button className="btn returnbtn" onClick={() => goback()}>
        <i className="bi bi-caret-left"></i>To Return
      </button>
      <div className="container lessaoncontainer">
        <div className="profileheading">
          <h1>
            Lesson {props.index}- {props.Beginner.title}{" "}
          </h1>
          <h4>{props.Beginner.info}</h4>
        </div>
        <div className="container lessonbox">
          <div className="row">
            <div className="box shadow col-md-2">
              <h2>Easy Grammer</h2>
              <p>{props.Beginner.info}</p>
              <i className="bi bi-x-circle"></i>
              <Link className="link" to={props.Beginner.linkOfEasyGrammer}>
                <button className="btn">Begin</button>
              </Link>
            </div>
            <div className="box shadow col-md-2">
              <h2>Miniseries</h2>
              <p>{props.Beginner.title}</p>
              <i className="bi bi-x-circle"></i>
              <button className="btn">Begin</button>
            </div>
            <div className="box shadow col-md-2">
              <h2>Fluency</h2>
              <p>Practice and master all 5 skils</p>
              <i className="bi bi-x-circle"></i>
              <Link className="link" to={props.Beginner.LinkFluency}>
                {" "}
                <button className="btn">Begin</button>
              </Link>
            </div>
            <div className="box shadow col-md-2">
              <h2>Exam</h2>
              <p>Excercises and evaluation</p>
              <i className="bi bi-x-circle"></i>
              <Link className="link" to={props.Beginner.LinkExam}>
                <button className="btn">Begin</button>
              </Link>
            </div>

            <div className="box shadow col-md-2">
              <h2>Live Class</h2>
              <p>With American and British teachers</p>
              <i className="bi bi-x-circle"></i>
              <Link className="link" to  ="/calender"><button className="btn">Begin</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
