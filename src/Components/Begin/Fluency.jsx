import React from "react";
import { Link } from "react-router-dom";

export default function Fluency() {
  return (
    <div className="speak">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mx-auto btext2">
            <h1>GET FLUENCY FASTER WITH OUR 24/7 ONLINE PLATFORM</h1>
            <p>
              Speak 5 also gives you an online platform to get you fluent
              faster:
            </p>
            <p>
              <span> Level up and</span> get a{" "}
              <span> certificate in just 2 months</span> with a
              <span> personalized study plan</span>
            </p>
            <p>
              Enjoy <span> 5 levels and 100 units of</span> content based on the{" "}
              <span> Common European Framework </span>from total{" "}
              <span> beginner to expert </span>in the language. You can enter 24
              hours a day and learn at your own pace
            </p>
            <p>
              Each unit teaches you through fun explanations, audio, video,
              pronunciation correction, thousands of interactive exercises and
              live 1-on-1 classes with native teachers.
            </p>
            <Link className="link" to="/signup">
              <button className="btn regbtn">
                LEARN TO SPEAK ENGLISH FLUENTLY
              </button>
            </Link>
          </div>
          <div className="col-sm-4 mx-auto ptext2">
            <img src="https://www.speak5.com/images/4image.png" alt="" />
          </div>
        </div>
      </div>
      <div className="container begin">
        <div className="tt">
          <h1>LEARN WITH THE ONLY METHOD THAT REALLY WORKS</h1>
          <p>
            That ensures you will learn real English with your favorite topics
          </p>
        </div>
        <div className="row">
          <div className="col-sm-4 mx-auto">
            <img
              className="i1"
              src="https://www.speak5.com/assets/images/art-2.png"
              alt=""
            />
          </div>
          <div className="col-sm-4 mx-auto btext">
            <p>
              The Speak 5 system works because it mimics the natural learning of
              a language: first you learn by listening and repeating what you
              hear, with instant correction of what you say, and then you read
              and write what you learned.
            </p>
            <p>
              This process is complemented by native teachers with whom you
              practice and converse live, so that you can achieve fluency
              faster, just as you learned your own language. It doesn't matter
              if you don't know any English, Speak 5 will help you speak it fast
            </p>
            <Link className="link" to="/signup">
              <button className="btn regbtn">
                {" "}
                PRACTISE ENGLISH RIGHT NOW
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
