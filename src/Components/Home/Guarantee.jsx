import React from "react";
import { Link } from "react-router-dom";

export default function Guarantee() {
  return (
    <div className="container guaratee">
      <div className="row">
        <div className="col-md-3">
          <img
            src="https://www.speak5.com/assets/images/guarantee.png"
            alt=""
          />
        </div>
        <div className="col-md-8 g2">
          <h2>DO YOU HAVE ANY GUARATEE?</h2>
          <h3>OF COURSE! WE HAVE THIS GUARANTEE:</h3>
          <p>
            Not only do we guarantee that Speak 5 is the best and cheapest
            course with live classes 5 times a week . We also guarantee this:
            take the course for 12 months, and if after that time you have not
            upgraded, we will give you 6 months at no extra cost . We only ask
            that you take all your classes live and study the multimedia
            platform for at least 45 minutes a day.
          </p>
        </div>
      </div>
      <p className="par2">
        To make the guarantee valid, it is necessary that you have taken an
        official exam, such as the TOEIC, TOEFL or some Cambridge exam, and that
        after taking the course you have taken the same exam and that you have
        obtained a score equal to or lower than the one you got in the first
        exam
      </p>
      <Link className="link" to = "/signup"><button className="btn offerbtn2">
          {" "}
          <h1>TODAY ONLY OFFER = $139 USD PER MONTH</h1>{" "}
          <p>Over 90% off original value of $2,894</p>
        </button></Link>
    </div>
  );
}
