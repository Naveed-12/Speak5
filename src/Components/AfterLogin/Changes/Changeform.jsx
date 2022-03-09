import React from 'react'
import './changeform.css'
import { useState } from 'react'

export default function Changeform() {
    const [checkpasssetting, setchange] = useState(false)
    return (
    <div className='container-fluid changeback'>
        <div className="container changeform">
            <div className="profileheading">
                <h1>PROFILE</h1>
            </div>
            <div className="formch">
                <h2>UserName</h2>
                <input type="text" />
                <h2>Renewal day</h2>
                <input type="text" />
                <h2>email</h2>
                <input type="text" />
                <h2>Password</h2>
                {
                    !checkpasssetting&&
                    <p onClick={()=>setchange(!checkpasssetting)}>Change your password</p>
                }
                {
                    checkpasssetting&&
                    <input type="text" />
                    
                }
                <h2>Country</h2>
                <input type="text" />
                <button className='btn cancelsubs'>Cancel Subscription</button>
                <button className='btn savechange'>Save Changes</button>
                
            </div>
        </div>
    </div>
  )
}
