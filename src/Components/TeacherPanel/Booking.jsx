import React from "react";

export default function Booking(props) {
  return (
    <div className="bookininfo ">
      <h2>Booking and Payment information</h2>
      <div className="container binfo">
        <div className="row">
          <div className="col-md-4 text-center mx-auto">
            <h3>Lessons completed ({props.info[0].completedlessondate})</h3>
            <h1>{props.info[0].lessons}</h1>
            <p>
              These are the lectures which I have done from this time period.
            </p>
          </div>
          <div className="col-md-4 text-center mx-auto">
            <h3>
              Money Earned to be paid out ({props.info[0].completedlessondate})
            </h3>
            <h1>${props.info[0].earned}</h1>
            <p>This Amount I have earned from the lectures</p>
          </div>
        </div>
      </div>
      <div className="foot">
        <h5>
          Choose your available slots for teachings . you have to choose slots
          for the current week and next one if you don't change them at some time it will be changed
        </h5>
      </div>
    </div>
  );
}
