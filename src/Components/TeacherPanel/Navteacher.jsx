import React from "react";
import { Link } from "react-router-dom";
import './Teacherpanel'
import { useHistory } from "react-router-dom";

export default function Navteacher(props) {
  const history = useHistory()
    const goback = () =>{
        history.goBack();
  }
    return (
    <div>
      <nav className="Navt">
        <i className="bi bi-arrow-left-short arrow" onClick={()=>goback()}>back</i>  
      <ul className="ul">
      <Link className="link" to="/teacherpanel">
        <li><h1>Teacher Panel</h1></li>
      </Link>  
      <Link className="link" to="">
        <li className="msgs"> Messages</li>   
      </Link>
      <Link className="link" to="/">
      <li className="msgs2"> LogOut</li>   
    </Link>  
      
        </ul>
        
      </nav>
    </div>
  );
}
