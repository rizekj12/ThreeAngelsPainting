import React from "react";
import "../CSS/Header.scss";

const Header = () => {
  return (
    <div className="headerDiv">
      <div className="titleDiv">
        <h1 className="mainTitle">Three Angels Painting</h1>
        <h2>High quality home remodeling. Affordable pricing.</h2>
      </div>
      <div className="quoteDiv">Request Quote</div>
      <div className="weCare">
          <span>WE CARE!</span>
          Our Covid-19 practices include additional cleaning, disinfecting, wearing a mask and anything else upon request.</div>
    </div>
  );
};

export default Header;
