import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../styles/navbar.css";
import { useState } from "react";

export const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav className="navbar">
      <div className="container nav__container">
        <Link to="/" className="logo">
          <span className="navbar-brand mb-0 h1">Brenda Orozco</span>
        </Link>
        <ul onClick={() => setIsNavShowing(!isNavShowing)} className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
          <li>
          <NavLink
            to="/"
            onClick={() => setIsNavShowing(!isNavShowing)}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            HOME
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/about"
            onClick={() => setIsNavShowing(!isNavShowing)}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            ABOUT ME
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/services"
            onClick={() => setIsNavShowing(!isNavShowing)}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            PORTFOLIO
          </NavLink>
          </li>
          <li>
          <NavLink
            to="/contact"
            onClick={() => setIsNavShowing(!isNavShowing)}
            className={({ isActive }) => (isActive ? "active-nav" : "")}
          >
            CONTACT ME
          </NavLink>
          </li>
        </ul>
        <button onClick={() => setIsNavShowing(!isNavShowing)} className="nav__toggle-btn">
          {isNavShowing ? <i className="fa-solid fa-xmark"></i> :<FaBars /> } 
        </button>
      </div>
    </nav>
  );
};
