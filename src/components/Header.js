import React from "react"
import Typed from "react-typed"
import { Link } from "react-scroll";

const Header = () => {
    return (
      <div id="home" className="header-wraper">
          <div className="main-info">
              <h1>Marek Žáčik</h1>
              <Typed
                className="typed-text"
                strings={["Back-end", "Web Development", "Game development", "Neural networks"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <Link smooth={true} to="contacts" offset={-110} className="btn-main-offer">Contact me</Link>
          </div>
      </div> 
    )
}

export default Header;