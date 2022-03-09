import React from "react";
import MethodOfWork from "./MethodOfWork";
import ScientificLearning from "./ScientificLearning";
import SecretTools from "./SecretTools";
import Intractive from "./Intractive";
import Ovideo from "./Ovideo";
import { Link } from "react-router-dom";

export default function NativeTeacher() {
  return (
    <div className="container-fluid">
      <div className="container begin">
        <div className="row">
          <div className="col-sm-4 mx-auto" style={{marginBottom:"30px"}}>
            <img
              className="i2"
              src="https://www.speak5.com/assets/images/image-1.jpg"
              alt=""
            />
          </div>
          <div className="col-sm-4 mx-auto btext">
            <h1>
              NATIVE TEACHERS{" "}
              <img
                src="https://www.speak5.com/assets/images/icons/icon-5.png"
                alt=""
              />{" "}
              WILL MAKE YOU SPEAK ENGLISH
            </h1>
            <p>
              Speak 5 will help you <span>0 speak English fluently </span>thanks to a system
              that combines <span> live classes 1 to 1 with native teachers </span>, plus a
              multimedia learning platform, which forces you to <span> speak English
              from your first class ,</span> until you achieve fluency in the language.
            </p>
            <Link className="link" to = "/signup"><button className="btn regbtn"> REGISTER NOW</button>
          </Link></div>
        </div>
      </div>
      <MethodOfWork/>
      <ScientificLearning/>
      <SecretTools/>
      <Intractive/>
      <Ovideo/>
    </div>
  );
}
