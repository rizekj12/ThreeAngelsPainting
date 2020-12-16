import React from 'react';
import "../CSS/ServiceTopic.scss"

const ServiceTopic = (props) => {
    return ( 
        <div>
            <img className="serviceImg" src={props.image} alt=""/>
            <p>{props.paragraph}</p>
        </div>
        
     );
}
 
export default ServiceTopic;