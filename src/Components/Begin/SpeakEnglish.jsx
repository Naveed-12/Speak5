import React from "react";
import { Link } from "react-router-dom";
export default function SpeakEnglish() {
  return (
    <div className="speak">
      <div className="container">
        <h1>SPEAKING ENGLISH WITH CONFIDENCE WILL HELP YOU...</h1>
        <div className="row">
          <div className="col-sm-4 mx-auto btext2">
            <p>Get a better paying job or a pay raise</p>
            <p>
              Travel the world and make friends with people of different
              nationalities
            </p>
            <p>
              Enter the university or school of your dreams in the USA, Canada,
              England or another foreign country
            </p>
            <p>
              Meet your better half in Paris, Rome or the destination of your
              dreams
            </p>
            <p>Enjoy your series and movies without subtitles</p>
            <p>
              Enjoy conversations in English understanding everything and
              actively participating
            </p>
            <b>
              Speak 5 and its native teachers will help you make this happen
              with live 1-on-1 classes
            </b>
            <Link className="link" to = "/signup"> <button className="btn regbtn">CHANGE YOUR LIFE AND LEARN ENGLISH NOW</button></Link>
          </div>
          <div className="col-sm-4 mx-auto ptext2">
            <img src="https://www.speak5.com/images/2image.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
