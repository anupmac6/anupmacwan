import { Link, withRouter } from "react-router-dom";

import React from "react";

function Menu({ location }) {
  const getActiveClass = (path) => {
    try {
      if (location.pathname === path) {
        return "nav-anim active";
      } else {
        return "nav-anim";
      }
    } catch (error) {
      return "nav-anim";
    }
  };
  return (
    <ul className="main-menu">
      <li className="active">
        <Link to="/" className={getActiveClass("/")}>
          <span className="menu-icon lnr lnr-home"></span>
          <span className="link-text">Home</span>
        </Link>
      </li>
      <li>
        <Link to="/about-me" className={getActiveClass("/about-me")}>
          <span className="menu-icon lnr lnr-user"></span>
          <span className="link-text">About Me</span>
        </Link>
      </li>
      <li>
        <Link to="/resume" className={getActiveClass("/resume")}>
          <span className="menu-icon lnr lnr-graduation-hat"></span>
          <span className="link-text">Resume</span>
        </Link>
      </li>
      <li>
        <Link to="/contact-me" className={getActiveClass("/contact-me")}>
          <span className="menu-icon lnr lnr-envelope"></span>
          <span className="link-text">Contact</span>
        </Link>
      </li>
    </ul>
  );
}

export default withRouter(Menu);
