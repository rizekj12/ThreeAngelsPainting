import React, { useState } from "react";
import "../CSS/Nav.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="headingDiv">
        <Link to="header" smooth={true} duration={1000}>
        <h1 className="headingTitle">Three Angels Painting</h1>
        </Link>
      <div className="navLinks">
        <Link className="quoteText linkText" to="quote" smooth={true} duration={1000}> Quote </Link>
        <Link className="linkText" to="services" smooth={true} duration={1000}> Services </Link>
        <Link className="linkText" to="our-work" smooth={true} duration={1000}>
            <div className="ourWorkTexts">
            <span className="ourWork">Our </span><span className="ourWork"> Work</span>
            </div>
        </Link>  
        <Link className="linkText" to="testimonials" smooth={true} duration={1000}> Testimonials </Link>
        <Link className="linkText" to="about-us" smooth={true} duration={1000}> About </Link>
      </div>
    </div>
  );
};

export default Nav;
