import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function LogInNavbar() {
  let [showHide, setShowHide] = useState(false);
  const history  = useHistory()
  const goback = () => {
    history.goBack();
  };
  return (
    <>
      <div className="full-blue">
        <div className="login-container">
          <div className="row-div">
            <div className="mx-5">
              <img
                src="http://www.speak5.com/images/user-icon-1.png"
                style={{ maxWidth: "44px", border: "0" }}
              />
              <p className="text-light">
                Guy,{" "}
                <img
                  onClick={() => setShowHide(!showHide)}
                  src="http://www.speak5.com/images/arrow-icon.png"
                />
              </p>
            </div>
            <div className="mt-3">
              <p
                className="text-uppercase text-light"
                style={{ fontWeight: "700px" }}
              >
                Speak 5
              </p>
            </div>
          </div>
          {showHide && (
            <div>
              <ul className="login-ul">
                <Link className="link" to="/lessons">
                  {" "}
                  <li>
                    <p className="text-light text-uppercase mt-2">lessons</p>
                  </li>
                </Link>
                <li onClick={() => goback()}>
                  <p className="text-light text-uppercase mt-2">recent</p>
                </li>
                <Link className="link" to="/advance">
                  <li>
                    <p className="text-light text-uppercase mt-2">advances</p>
                  </li>
                </Link>
                <Link className="link" to="/afterlogin">
                
                <li>
                  <p className="text-light text-uppercase mt-2">profile</p>
                </li>
                </Link>
                <Link className="link" to = "/contactus">
                <li>
                  <p className="text-light text-uppercase mt-2">contact</p>
                </li>
                </Link>
                <Link className="link" to = "/">
                <li>
                  <p className="text-light text-uppercase mt-2">sign off</p>
                </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
