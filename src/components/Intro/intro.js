import React from "react";
import "./intro.css";
import bg from '../Intro/proweb.png';
import {Link} from'react-scroll';

const Intro = () =>{
    return(
       <section id="intro">
        <div className="introContent">
    <span className="Hello">Hello,</span>
    <span className="introText">I'm <span className="introName">
        Juee<br/>Software Developer
    </span>
    </span>
    <p className="introPara">Hi, I'm Juee Khandale, a Computer Science student<br/>
     passionate about software development.<br/>
    </p>
    <Link><button className="btn">Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
       </section>
    );
}

export default Intro;