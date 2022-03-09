import React from 'react'
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  return (
    <div className='container-fluid begin'>
        <div className="container signinbox">
            <div className="headsignin">
                <h1>ENTER SPEAK5</h1>
                <img src="https://www.speak5.com/assets/images/icons/icon-1.png" alt="" />
            </div>
            <input type="text"  placeholder='Email '/>
            <input type="text"  placeholder='Password '/>
            <button className='btn Enterbtn'>Enter</button>
            <Link className='link' to = "/forgetpass"><p>Did you forget your Password?</p></Link>
            <div className="or">
                <hr />
                <b>or</b>
                <hr />
            </div>
            <Link className = "link" to = "/prices"><button className='btn sregister'>Register Now</button></Link>
        </div>
    </div>  
  )
}
