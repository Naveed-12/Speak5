import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css';
import { useHistory } from 'react-router-dom';
import LogInNavbar from './LogInNavbar';

export default function NavBar() {
    const history = useHistory();
    const goback = ()=>{
        history.goBack()
    }
  return (
    <div>
    <LogInNavbar/>
    <nav className="Nav2 fixed-top">
            <Link className='link' to = ""><h2>Speak 5</h2></Link>
            <ul >
                <Link className="link" to = "/lessons"><li><a href="">Lessons</a></li></Link>
                <li onClick={()=>goback()}><a href="">Recent</a></li>
                <Link className="link" to = "/advance"><li><a href="">Advances</a></li></Link>
                <Link className="link" to = "/afterlogin"><li><a href="">Profile</a></li></Link>
                <Link className="link" to = "/contactus"><li><a href="">Contact</a></li></Link>
                <Link className="link" to = ""><li><a href="">Guy</a></li></Link>
            </ul>
            <i className="bi bi-list listicon2"></i>
        </nav>
    </div>
        
  )
}
