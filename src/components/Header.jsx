import React from "react";
import "../CSS/Header.scss";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <section id="header">
      <div className="headerDiv">
        <div className="titleDiv">
          <h1 className="mainTitle">Three Angels Painting</h1>
          <h2>High quality home remodeling. Affordable pricing.</h2>
        </div>
        <Link to="quote" smooth={true} duration={1000}>
          <div className="quoteDiv">Request Quote</div>
        </Link>
        <div className="weCare">
          <span>WE CARE!</span>
          Our Covid-19 practices include additional cleaning, disinfecting,
          wearing a mask and anything else upon request.
        </div>
      </div>
    </section>
  );
};

export default Header;
