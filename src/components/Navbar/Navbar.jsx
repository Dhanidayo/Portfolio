import { Link } from "react-router-dom";
import "./Navbar.css";
import SocialMediaIcons from "../socialmediaicons";

function Navbar(props) {
  return (
    // <div className="sidenav" style={{width:props.width}}>
    <div className={`sidenav ${props.isNavClosed && "nav-closed"}`}>
      <button onClick={props.closeNav} className="closeNav">
        X
      </button>

      <nav className="navlinks">
        <Link to="/Home" className="link icon">
          SARAH ADEBESIN
        </Link>

        <Link to="/About" className="link">
          ABOUT
        </Link>

        <Link to="/Projects" className="link">
          PROJECTS
        </Link>

        <Link to="/Contact" className="link">
          CONTACT
        </Link>
      </nav>
      <SocialMediaIcons />
    </div>
  );
}

export default Navbar;
