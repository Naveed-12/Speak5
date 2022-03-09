import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Page1, Page2, Page3} from "./Pagesforint7";

export default function EasyGrammerint7(props) {
  const history = useHistory();
  let pages = props.pages;
  const Head = [
    {
      heading: "1.	YET, STILL, ALREADY, ANY MORE, ANY LONGER, NO LONGER",
      p: "		Still, still and not anymore",
    },
    {
        heading: "1.	YET, STILL, ALREADY, ANY MORE, ANY LONGER, NO LONGER",
      p: "		Still, still and not anymore",
    },{
      heading: "1.	YET, STILL, ALREADY, ANY MORE, ANY LONGER, NO LONGER",
      p: "	Still, still and not anymore",
    },{
      heading: "4.	PLURAL AND SINGULAR NOUNS",
      p: "	Plural and singular nouns",
    },{
      heading: "two.	NOUNS WITH THE VERB TO BE",
      p: "Nouns with the verb “ser” or “estar”",
    },{
      heading: "two.	NOUNS WITH AN ADJECTIVE",
      p: "PLURAL AND SINGULAR NOUNS",
    },{
      heading: "3.	COUNTABLE AND UNCOUNTABLE NOUNS",
      p: "Countable and uncountable nouns",
    },{
      heading: "8.	PLURAL AND SINGULAR NOUNS",
      p: "	Plural and singular nouns",
    },{
      heading: "9.	PLURAL AND SINGULAR NOUNS",
      p: "	Plural and singular nouns",
    },{
      heading: "10.	PLURAL AND SINGULAR NOUNS",
      p: "	Plural and singular nouns",
    },{
      heading: "11.	PLURAL AND SINGULAR NOUNS",
      p: "	Plural and singular nouns",
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