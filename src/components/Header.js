import React from "react";
import logo from "../assets/Plate-Recognizer-ALPR-license-plate-recognition-logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="header-main">
        <div className="logo">
          <Link to="/upload" ><img src={logo} alt="#"></img></Link>
        </div>
        <div className="menu">
          <ul>
            <li>Products</li>
            <li>Integrations</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Help</li>
            <li>Contact</li>
            <li><button>Sign Up</button></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
