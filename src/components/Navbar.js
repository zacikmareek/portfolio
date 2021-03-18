import React from "react";
import logo from "../logo_transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
  <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="logo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{ color: "#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">My Work</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Experience</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Portfolio</a>
    </li>
    <li className="nav-item">
        <a className="nav-link" href="#">Contact</a>
    </li>
    </ul>
  </div>
  </div>
</nav>
    )
}

export default Navbar
