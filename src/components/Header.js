import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/Logo.svg";
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav id="headerMenu">
      <img src={logo} alt="logo" />
      <button
        className="nav-bar-hamburger"
        type="button"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        {isNavExpanded ? (
          <FontAwesomeIcon icon={faXmark} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faBars} size="2x" />
        )}
      </button>
      <ul className={isNavExpanded ? 'nav-bar-links expanded' : 'nav-bar-links'} 
          onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order-online">Order Online</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
