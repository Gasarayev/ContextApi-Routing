import { Link } from "react-router-dom";
import "./header.css";

function Headers({favIcon}) {
  return (
    <>
      <div className="header">
        <div className="head_logo">
          <p>LOGO</p>
        </div>
        <ul className="head_menu">
          <li>
          <Link to={"/"}>  Home </Link>
          </li>

          <li><Link to={"/shopping-list/"}>  Cards  </Link></li>
          
          
          <li><Link to={"/favorite/"} > Favorites <span>{favIcon}</span></Link></li>
        
        </ul>
      </div>
    </>
  );
}

export default Headers;
