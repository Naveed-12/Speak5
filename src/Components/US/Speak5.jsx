import React from "react";
import { Link } from "react-router-dom";

export default function Speak5() {
  return (
    <div className="speak">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mx-auto btext2">
            <h2>WHAT IS SPEAK 5 AND HOW WAS IT BORN?</h2>
            <p>
              Speak 5 is the leading English academy in the industry, having
              helped thousands of people, just like you, learn to speak English
              fluently.{" "}
            </p>
            <p>
              It had its beginnings with teachers Kimberly, Alex and Orianne,
              who, based on the findings of the renowned linguist Dr. Paul
              Pimsleur, began to collect the words and phrases most used by
              native speakers in real situations, and then use them in a
              repetitive conversational immersion. with students of different
              levels.
            </p>
            <p>
              The results were astounding, as students began speaking and
              understanding the English language within weeks, effectively
              learning real-world vocabulary, expressions, and grammar.
            </p>
            <p>
              After thousands of success stories, these teachers decided to
              share their teaching system with the whole world, and thus Speak 5
              was born.
            </p>
            <Link className="link" to = "/signup"><button className="btn regbtn">
              PRACTISE ENGLISH RIGHT NOW
            </button></Link>
          </div>
          <div className="col-sm-4 mx-auto ptext2">
            <img src="https://www.speak5.com/assets/images/art-3.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
