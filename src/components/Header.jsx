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
    </div>
  );
};

export default Header;
