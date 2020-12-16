import React from "react";
import "../CSS/ServiceTopic.scss";

const ServiceTopic = (props) => {
  return (
    <div className={` ${props.customStyle2} ${props.side} serviceTopicDiv`}>
      <img className={`serviceImg ${props.customStyle}`} src={props.image} alt={`${props.topic} image`} />
      <div className="textsDiv">
        <h3>{props.topic}</h3>
        <p className="servicePara">{props.paragraph}</p>
        <button className="serviceQuoteBtn">REQUEST QUOTE</button>
      </div>
    </div>
  );
};

export default ServiceTopic;
