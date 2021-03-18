import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPython } from "@fortawesome/free-brands-svg-icons";
import { faDesktop , faFileCode, faGamepad } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
    return (
       <div id="services" className="services">
           <h1 className="py-5">What I'm working with</h1>
               <div className="container">
                   <div className="row">
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={ faFileCode } size="2x" /></div>
                               <h3>Back-end</h3>
                               <p>Java (Spring), JavaScript (Node.js), PHP (Laravel), Python (Flask), C#</p>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={ faDesktop } size="2x"/></div>
                               <h3>Web Development</h3>
                               <p>HTML, CSS, Bootstrap, JavaScript (Vue.js, React.js)</p>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={ faGamepad } size="2x" /></div>               
                               <h3>Game Development</h3>
                               <p>Unity Game Engine, Unreal Engine</p>
                           </div>
                       </div>
                       <div className="col-lg-3 col-md-6 col-sm-6">
                           <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={ faPython } size="2x" /></div>
                               <h3>Neural networks</h3>
                               <p>Python (OpenCV, Tensorflow, matplotlib) </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
    )
}

export default Services;
