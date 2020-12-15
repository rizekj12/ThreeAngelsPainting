import React, { useState } from "react";
import "../CSS/Nav.scss";
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <div className="headingDiv">
      <h1 className="headingTitle">Three Angels Painting</h1>
      <div className="navLinks">
        <Link className="quoteText linkText"> Quote </Link>
        <Link className="linkText"> Services </Link>
        <Link className="linkText"> Our Work </Link>
        <Link className="linkText"> Testimonials </Link>
      </div>
    </div>
  );
};

export default Nav;
