import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Nav = () => {
  return (
    <nav id="headerMenu">
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="about">About</a>
        </li>
        <li>
          <a href="menu">Menu</a>
        </li>
        <li>
          <a href="reservations">Reservations</a>
        </li>
        <li>
          <a href="orderOnline">Order Online</a>
        </li>
        <li>
          <a href="login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
