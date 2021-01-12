import React, { useEffect, useState } from "react";

import image from "../../images/main_photo.jpg";

export default function Header({ children, showMobileMenu }) {
  return (
    <header
      id="site_header"
      className={`header ${showMobileMenu ? "mobile-menu-hide" : ""}`}
    >
      <div className="header-content">
        <div className="header-photo">
          <img src={image} alt="Anup Macwan" />
        </div>
        <div className="header-titles">
          <h2>Anup Macwan</h2>
          <h4>Full Stack Developer</h4>
        </div>
      </div>
      {children}
    </header>
  );
}
