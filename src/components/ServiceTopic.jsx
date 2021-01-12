import React from "react";
import "../CSS/ServiceTopic.scss";
import { Link } from "react-scroll";

const ServiceTopic = (props) => {
  return (
    <div className={` ${props.customStyle2} ${props.side} serviceTopicDiv`}>
      <img
        className={`serviceImg ${props.customStyle}`}
        src={props.image}
        alt={props.topic}
      />
      <div className="textsDiv">
        <h3>{props.topic}</h3>
        <p className="servicePara">{props.paragraph}</p>
        <Link to="quote" smooth={true} duration={1000}>
          <button className="serviceQuoteBtn">REQUEST QUOTE</button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceTopic;
