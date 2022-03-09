import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgetPass() {
  return (
    <div className='container-fluid begin'>
        <div className="container signinbox">
            <div className="headsignin">
                <h1>Did you Forget Your Password ?</h1>
                <img src="https://www.speak5.com/assets/images/icons/icon-1.png" alt="" />
            </div>
            <input type="text"  placeholder='Email Your Email '/>
            <button className='btn Enterbtn'>Recover Password</button>
            <Link className='link' to = "/signin"><p>ENTER SPEAK 5</p></Link>
            <div className="or">
                <hr />
                <b>or</b>
                <hr />
            </div>
            <Link className = "link" to = "/prices"><button className='btn sregister'>Register Now</button></Link>
        </div>
    </div>  )
}
