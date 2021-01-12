import React from "react";

export default function index({ showMobileMenu, toggle }) {
  return (
    <div
      className={`menu-toggle ${showMobileMenu ? "" : "open"}`}
      onClick={toggle}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
