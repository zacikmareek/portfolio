import React from "react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Vlčany, 925 84, Slovakia</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: +421 905 560 314">+421 905 560 314</a>
                        </div>
                        <div className="d-flex">
                            <p>zacik.mareek@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link smooth={true} to="home" offset={-110} className="footer-nav">Home</Link>
                                <br/>
                                <Link smooth={true} to="about" offset={-110} className="footer-nav">About me</Link>
                                <br/>
                                <Link smooth={true} to="services" offset={-110} className="footer-nav">My work</Link>
                            </div>
                            <div className="col">
                                <Link smooth={true} to="experience" offset={-110} className="footer-nav">Experience</Link>
                                <br/>
                                <Link smooth={true} to="portfolio" offset={-110} className="footer-nav">Portfolio</Link>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <SocialIcon className="mx-3" url="https://www.facebook.com/marekzacik/" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://www.instagram.com/zarek_macik/" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://wa.me/0905560314" network="whatsapp" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://github.com/zacikmareek" style={{ height: 36, width: 36 }}/>
                            <SocialIcon className="mx-3" url="https://www.linkedin.com/in/zacikmareek/" style={{ height: 36, width: 36 }}/>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
