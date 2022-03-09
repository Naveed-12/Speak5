import React from "react";
import { Link } from "react-router-dom";

export default function SecretTools() {
  return (
    <div className="speak">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mx-auto btext2" style={{marginBottom:"30px"}}>
            <h1>THEN, USE YOUR SECRET TOOL: LIVE NATIVE TEACHERS, 1 ON 1</h1>
            <p>
              The best way to learn is to immerse yourself with someone who is
              an expert in the language, live, and who better than <span> expert native
              teachers </span> so that you can learn and reinforce the English that is
              actually used in the real world?
            </p>
            <p>
              Live classes with native teachers are <span> private </span>, 1 to 1, 100%
              online. Each class is unique and adjusts to your level, goals and
              schedule. You can use your live class so that your teachers teach
              you from scratch, to reinforce a topic or simply to chat and
              improve your fluency while you continue to absorb real English
            </p>
            <Link className="link" to = "/signup"> <button className="btn regbtn">
             LEARN TO SPEAK ENGLISH FLUENTLY
            </button></Link>
          </div>
          <div className="col-sm-4 mx-auto ptext2">
            <img src="https://www.speak5.com/assets/images/art-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
