    import React from "react";
import "./lessons.css";
import { useState, useEffect } from "react";
import { beginner } from "./LessonsData";
import { preinter } from "./LessonsData";
import { inter } from "./LessonsData";
import { interadvance } from "./LessonsData";
import { business } from "./LessonsData";
import DisplayBeginner from "./DisplayBeginner";
import DisplayPreinter from "./DisplayPreinter";
import Displayinter from "./Displayinter";
import Displayinteradvance from "./Displayinteradvance";
import DisplayBusiness from "./DisplayBusiness";

export default function Lessons(props) {
  const [lesson, setlesson] = useState("");
  const [category,setcategory] = useState("");
  const [typeofclass, settype] = useState("");
  const displaycategory = (val) => {
      setcategory(val);
    if(val==="beginner"){

        settype("Beginners Lessons")
        setlesson("Lesson 1 to 20")
    }
    if(val === "preinter"){

        settype("Pre-intermediate Lessons")
        setlesson("Lesson 21 to 40")
    }
    if(val === "inter"){

        settype("intermediate Lessons")
        setlesson("Lesson 41 to 60")
    }
    if(val === "interadvance"){

        settype("intermediate-Advance Lessons")
        setlesson("Lesson 61 to 80")
    }
    if(val === "business"){

        settype("Advance/Business Lessons")
        setlesson("Lesson 81 to 100")
    }
    
  };
  useEffect(() => {
    settype("Beginners Lessons");
    setlesson("Lesson 1 to 20")
    setcategory('beginner');
  }, []);

  return (
    <div className="container-fluid changeback">
      <div className="container lessaoncontainer">
        <div className="profileheading">
          <div className="row">
            <div className="col-md-4">
              <h1>{typeofclass}</h1>
              <p>{lesson}</p>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-4">
              <select
                name="categories"
                id="cat"
                onChange={(e) => displaycategory(e.target.value)}
              >
                <option value="beginner">BEGINNER(A1 - A2)</option>
                <option value="preinter">PRE-INTERMEDIATE(A2 - B1)</option>
                <option value="inter">INTERMEDIATE(B1 - B2)</option>
                <option value="interadvance">
                  INTERMEDIATE-ADVANCE(B2 - C1)
                </option>
                <option value="business">ADVANCE/BUSINESS(C1 - C2)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container lessonbox">
          <div className="row">
            {   
                category==="beginner"&&
                <DisplayBeginner lessons = {beginner} setbeginner = {props.setbeginner}/>
            }
            {   
                category==="preinter"&&
                <DisplayPreinter lessons = {preinter} setbeginner = {props.setbeginner}/>
            }
            {   
                category==="inter"&&
                <Displayinter lessons = {inter} setbeginner = {props.setbeginner}/>
            }
            {   
                category==="interadvance"&&
                <Displayinteradvance lessons = {interadvance} setbeginner = {props.setbeginner}/>
            }
            {   
                category==="business"&&
                <DisplayBusiness lessons = {business} setbeginner = {props.setbeginner}/>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
