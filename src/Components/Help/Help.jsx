import React from "react";
import "./Help.css";

export default function Help() {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row help">
          <h1>
            <img
              src="https://www.speak5.com/assets/images/icons/icon-7.png"
              alt=""
            />
            <span> FREQUENT QUESTIONS</span>
            <img
              src="https://www.speak5.com/assets/images/icons/icon-6.png"
              alt=""
            />
          </h1>
          <p>
            In this section you will find answers to the most frequent questions
            that our current and past students have asked us. If you can't find
            the answer to your question, send us an email to help@speak5.com and
            we will gladly help you in less than 24 hours :)
          </p>
        </div>
      </div>
    </div>
  );
}
