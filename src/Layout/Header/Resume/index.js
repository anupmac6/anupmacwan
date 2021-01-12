import { Link } from "react-router-dom";
import React from "react";
import pdf from "../../../files/Anup Macwan.pdf";

export default function index() {
  return (
    <div className="header-buttons">
      <Link to={pdf} target="_blank" download className="btn btn-primary">
        Download CV
      </Link>
    </div>
  );
}
