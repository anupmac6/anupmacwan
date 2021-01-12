import { Link } from "react-router-dom";
import React from "react";

export default function index() {
  return (
    <div className="social-links">
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/anupmacwan" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/anup.macwan" target="_blank">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/anupmac6" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}
