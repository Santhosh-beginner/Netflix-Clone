import React from "react";
import './Nav.css';
import { useEffect, useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);
  const navbarControl = () => 
  {if (window.scrollY > 100) {setShow(true)} else {setShow(false)}}
  useEffect(()=>{
    window.addEventListener('scroll', navbarControl)
    return () => window.removeEventListener('scroll', navbarControl)},[])
   
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"
        alt="avatar"
      />
    </div>
  );
}

export default Nav;