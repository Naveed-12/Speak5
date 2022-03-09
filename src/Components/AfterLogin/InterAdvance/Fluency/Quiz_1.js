import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export default function Quiz_1(props) {
  let [showAnswer, setshowAnswer] = useState(false);
    const history = useHistory()
  let QuizProgressBarStyle = {
    width: "50%",
    ariaValueMax: "100",
  };
  const goback = () => {
    history.goBack();
  };
  return (
    <div className="marg container-fluid">
      <button className="btn returnbtn" onClick={() => goback()}>
        <i className="bi bi-caret-left"></i>To Return
      </button>
      <div className="container shadow my-5 p-0">
        <div className="row p-5">
          <div className="col-12 col-md-2">
            <img src={props.image} width={"100"} border={"0"} />
          </div>
          <div className="col-12 col-md-10 mt-md-0 mt-3">
            <div className="progress">
              <div
                className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                role={"progressbar"}
                style={QuizProgressBarStyle}
              ></div>
            </div>
          </div>
        </div>
        <h5 className="my-paragraph text-center h5">
          Press the sound icon, listen to the sentence and write it in English.
          Then press the microphone icon and say the sentence in English.
        </h5>
        <div className="row-div">
          <div className="speaker ">
            <button className="blue-icon-box">
              {" "}
              <i className="bi bi-volume-up text-light"></i>
            </button>
          </div>
          <div className="speaker">
            <button className="blue-icon-box">
              {" "}
              <i className="bi bi-mic microphone"></i>
            </button>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div className="input-style-1 text-center">
              <input
                type="text"
                className="input-style-2"
                placeholder="Write the Sentence in English"
              />
            </div>
          </div>
        </div>
        <p className="my-paragraph-2">{props.sentence}</p>
        {showAnswer === true && (
          <p className="my-paragraph-3"> Answer: {props.answer}</p>
        )}
        <div className="two-buttons-footer">
          <div className="row-div-2 mt-10">
            <div className="ml-10">
              <button
                className="button-footer"
                onClick={() => setshowAnswer(!showAnswer)}
              >
                Show Answers
              </button>
            </div>
            <div className="">
              <button className="button-footer-2">Evalute</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
