import React from "react";
import "../CSS/ServiceTopic.scss";

const ServiceTopic = (props) => {
  return (
    <div className={`${props.side} serviceTopicDiv`}>
      <img className={`serviceImg ${props.customStyle}`} src={props.image} alt={`${props.topic} image`} />
      <div>
        <h3>{props.topic}</h3>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
};

export default ServiceTopic;
