import React from 'react'
import img from '../pictures/logo.png';
import './Footer.css';
export default function () {
  return (
    <div className='footer'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 ">
                    <p>Privacy Policy</p>
                </div>
                <div className="col-md-2 ">
                    <p>Term and Condition</p>
                </div>
                <div className="col-md-2">
                    <p>Frequently Asked Questions</p>
                </div>
                <div className="col-md-2 ">
                    <p>Social Networks</p>
                </div>
            </div>
        </div>
        <img src={img} alt="" />
    </div>
  )
}
