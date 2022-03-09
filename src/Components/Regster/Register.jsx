import React from "react";
import { Link } from "react-router-dom";

export default function Register(props) {
  return (
    <div className="container-fluid begin">
    {
      // Setting of Register Page According to the Calling of the Component Which is of 3 types.
    }  
    <div className="row signup">
        <h1>SIGN UP AND LEARN ENGLISH AS FAST AS YOU WANT</h1>
        <p>
          Time is more valuable than money, and it never comes back, so enroll
          today and finally achieve fluency in the English language!
        </p>
        <h3>Premium Plan - Monthly Subscription</h3>
        <h4>$139 USD per month</h4>
        <h5>
          Automatically renews every month unless you cancel. Cancel AT ANY TIME
        </h5>
      </div>
      <div className="container paymentbox">
        <h1>Pay with credit or debit card and PayPal</h1>
        <p>
          After filling in your information you will be taken to the PayPal
          portal to finalize your secure purchase. Once the payment is made,
          your account will be activated and you will be able to enter
          successfully
        </p>
        <label htmlFor="Name">Name</label>
        <br />
        <input type="text" className="input" required/>
        <label htmlFor="Email">E-mail</label>
        <br />
        <input type="text" className="input" required/>
        <label htmlFor="Pass">password</label>
        <br />
        <input type="password" className="input" required/>
        <div className="radios">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3 className="h3">Payment method</h3>
              </div>
              <div className="col-md-4">
                <label className="container2">
                  <img  src="https://www.speak5.com/images/paypal-new.png" alt="" width={"80%"}/>
                  <input type="checkbox"  />
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="col-md-4">
                <label className="container2">
                  <img  src="https://www.speak5.com/images/oxo.png" alt="" width={"80%"}/>
                  <input type="checkbox" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
          <label htmlFor="country">Country</label>
          <br />
          <input type="text" className="input" required/>
          <label htmlFor="postal">Postal Code</label>
          <br />
          <input type="text" className="input" required/>
          <button className="btn regbtn">Register Now</button>
          <p>When you sign up you agree to receive our regular emails as well as our <Link className="link" to = "/termandcondition"><span> terms and conditions</span></Link> </p>
          </div>
      </div>
    </div>
  );
}
