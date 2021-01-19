
import React from "react";
import "../../App.css";
import logo from "../../images/resume.jpg";
import Pdf from "../../images/Resume.pdf";
import './Resume.css';

export default function Resume() {
  return (
    <div className="overall" background-color="#000000">
      <a href={Pdf} target="_blank" rel="noopener">
        <img
          alt="img-fluid hoverable"
          src={logo}
          className="resume1"
        />
      </a>
    </div>
  );
}