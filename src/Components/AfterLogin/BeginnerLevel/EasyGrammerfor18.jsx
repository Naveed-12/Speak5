import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7 } from "./Pagesfor18";

export default function EasyGrammerfor18(props) {
  const history = useHistory();
  let pages = props.pages;
  const Head = [
    {
      heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },
    {
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },{
        heading: "1.	THE GERUND (PART TWO)",
      p: "THE GERUND (PART TWO)",
    },
  ];
  const [i, seti] = useState(0);
  const increaseindex = () => {
    if (i < pages - 1) {
      let x = i + 1;
      seti(x);
    }
  };
  const decreamentindex = () => {
    if (i <= pages - 1 && i > 0) {
      let x = i - 1;
      seti(x);
    }
  };
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
          <h1>{Head[i].heading}</h1>
          <p>{Head[i].p}</p>
        </div>
        <div className="container lessonbox">
          {i == 0 && <Page1 />}
          {i == 1 && <Page2 />}
          {i == 2 && <Page3 />}
          {i == 3 && <Page4 />}
          {i == 4 && <Page5 />}
          {i == 5 && <Page6 />}

          </div>
        <div className="row profilefooter d-flex">
          <div className="col-md-4">
            <button
              className="btn previousbtn"
              onClick={() => decreamentindex()}
            >
              Previous
            </button>
          </div>
          <div className="col-md-4">
            <p>
              {i + 1}/{props.pages}
            </p>
          </div>
          <div className="col-md-4">
            <button
              className="btn followingbtn"
              onClick={() => increaseindex()}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
