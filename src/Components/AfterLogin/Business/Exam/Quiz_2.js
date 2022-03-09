import React, {useState}from 'react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function Quiz_2(props) {
  const history = useHistory()

    let [showAnswer, setshowAnswer] = useState(false)
    
  let QuizProgressBarStyle = {
    width: "50%",
    ariaValueMax: "100"
  }
  const goback = () => {
    history.goBack();
  };

  return (
    <div className="marg">
      <button className="btn returnbtn" onClick={() => goback()}>
        <i className="bi bi-caret-left"></i>To Return
      </button>
    <div className='container shadow mt-5 p-0'>
      <div className="row p-5">
        <div className="col-12 col-md-2">
          <img src={props.image} width={'100'} border={'0'} />
        </div>
        <div className="col-12 col-md-10 mt-md-0 mt-3">
          <div className="progress">
            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated"
              role={"progressbar"} style={QuizProgressBarStyle}></div>
          </div>
        </div>
      </div>
      <p className='p1 text-center'>Listen, read, speak and write:</p>
      <div className="row">
        <div className="col-12 col-md-5 mb-3 mb-md-0">
          <div className="qz-left">
            <div className="text-end">
              <a href=""><i className="bi bi-volume-up text-light"></i></a>
              <a href=""><i className="bi bi-mic microphone"></i></a>
            </div>
            <span className='text-span'>{props.answer1}</span>
          </div>
        </div>
        <div className="col-12 col-md-2 text-center mb-3 mb-md-0">
          <a href=""><img src="http://www.speak5.com/images/blue-arrow.png" alt="" /></a>
        </div>
        <div className="col-12 col-md-5">
          <textarea className="my-textarea" rows={'5'} placeholder="Write in Spanish"></textarea>
        </div>
      </div>
      {showAnswer === true && <p className='my-paragraph-3'> {props.answer2}</p>}
      <div className="two-buttons-footer">
                <div className="row-div-2 mt-10">
                    <div className="ml-10">
                        <button className='button-footer' onClick={() => setshowAnswer(!showAnswer)}>Show Answers</button>
                    </div>
                    <div className="">
                        <button className='button-footer-2'>Evalute</button>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}
