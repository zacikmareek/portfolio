import React from "react"
import flappyBird from "../images/flappyBird.png";
// import ludoGame from "../images/ludoGame.png";
// import website from "../images/website.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
// flappyBird
const openPopupboxFlappyBird = () => {
    const content = (
        <>
            <img className="portfolio-image-popupbox" src= {flappyBird} alt="Flappy Bird" />
            <p>Flappy Bird game written in C#</p>
            <a className="hyper-link" onClick={() => window.open("https://github.com/zacikmareek/simpleFlappyBird", "_blank")}>Github link</a>
        </>
    )
  PopupboxManager.open({ content })
}    

    const popupboxConfigFlappyBird = {
      titleBar: {
        enable: true,
        text: "Flappy Bird"
      },
      fadeIn: true,
      fadeInSpeed: 500
    }

// // LudoGame
// const openPopupboxLudoGame = () => {
//     const content = (
//       <>
//           <img className="portfolio-image-popupbox" src= {ludoGame} alt="Ludo console game" />
//           <p>Ludo console game written in Python</p>
//           <a className="hyper-link" onClick={() => window.open("https://github.com/zacikmareek/cloveceNezlobSe", "_blank")}>Github</a>
//       </>
//     )
//   PopupboxManager.open({ content })
// }    

// const popupboxConfigLudoGame = {
//     titleBar: {
//       enable: true
//     },
//     fadeIn: true,
//     fadeInSpeed: 500
//   }
     
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-lovercase text-center py-5">.portfolio()</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxFlappyBird}>
                        <img className="portfolio-image" src={flappyBird} alt="Flappy Bird" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* *  *
                    <div className="portfolio-image-box" onClick={openPopupboxLudoGame}>
                        <img className="portfolio-image" src={flappyBird} alt="Ludo Game" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div> */}
                </div> 
            </div>
            <PopupboxContainer {...popupboxConfigFlappyBird} />
            {/* <PopupboxContainer {...popupboxConfigLudoGame} /> */}
        </div>
    )
}

export default Portfolio;
