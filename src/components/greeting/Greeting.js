import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import Typewriter from 'typewriter-effect';


export default function Greeting() { 
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="heading">
              <small className="greeting-text" id="type">
                {" "}
                <span className="wave-emoji">{emoji("👋")}</span>
                <span>HI I'M</span>
                <Typewriter 
    options={{
    strings: ['Saikiran Chatlapalli', 'A Tech Enthusiast', 'An Aspiring Full Stack Developer'],
    autoStart: true,
    loop: true,
  }}
      
      /> 
                {" "}
               
              </small>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              {/* <SocialMedia /> */}
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saikiran sitting on table"
              src={require("../../assets/images/manOnTable.svg").default}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
