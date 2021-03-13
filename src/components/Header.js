import React from "react"
import Typed from "react-typed"

const Header = () => {
    return (
      <div className="header-wraper">
          <div className="main-info">
              <h1>Web development and web sites</h1>
              <Typed
                className="typed-text"
                strings={["Tvorba webových aplikácií" , "Tvorba desktopových aplikácií", "Tvorba mobilných aplikácií"]}
                typeSpeed={40}
                backSpeed={60}
                loop
              />
              <a href="#" className="btn-main-offer">Contact me</a>
          </div>
      </div> 
    )
}

export default Header;
