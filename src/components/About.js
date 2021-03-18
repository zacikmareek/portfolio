import React from "react";
import avatar from "../Photo.jpeg";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                    <img className="profile-img" src={avatar} alt="Avatar"/>
                    </div>
                </div>
    
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About me</h1>
                    <p>Hi! <br/>
                    My name is Marek. I'm 23 years old self taught programmer. <br/>
                    In my free time I'm learning new technologies and trying to implement them into some real world projects.
                    Currently I'm working on my first mobile app, which will be build in Flutter. I'm also working on Instagram clone, that will be written in Laravel.
                    <br/>
                    <br/>
                    I'm also interested in neural networks. "Identification of components in production using machine learning" is the name of my Bachelor thesis,
                    that I'm currently working on. 
                    <br/>
                    <br/>
                    Last but not least I'm huge fan of Game development. I'm learning Unreal Engine and hoping, that one day I will be able to release my own game.
                    <br/>
                    My portfolio section will be updated soon..
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About;
