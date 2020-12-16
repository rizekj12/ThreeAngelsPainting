import React, { useState } from "react";
import "../CSS/Nav.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="headingDiv">
      <h1 className="headingTitle">Three Angels Painting</h1>
      <div className="navLinks">
        <Link className="quoteText linkText"> Quote </Link>
        <Link className="linkText" to="services" smooth={true} duration={1000}> Services </Link>
        <Link className="linkText">
            <div className="ourWorkTexts">
            <span className="ourWork">Our </span><span className="ourWork"> Work</span>
            </div>
        </Link>  
        <Link className="linkText"> Testimonials </Link>
        <Link className="linkText" to="about-us" smooth={true} duration={1000}> About </Link>
      </div>
    </div>
  );
};

export default Nav;
