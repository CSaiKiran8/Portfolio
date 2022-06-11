import React from "react";
import Headroom from "react-headroom";
import "./Header.css";
import { greeting} from "../../portfolio";

function Header() {
  
  return (
    <Headroom>
      <header className="header">
        <a href="#" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
        <li>
            <a href="https://kiran-terminal.netlify.app/" target="_blank" rel="noreferrer">Know me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          { (
            <li>
              <a href="#Education">Education</a>
            </li>
          )}
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
