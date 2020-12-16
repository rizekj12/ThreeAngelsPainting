import React from 'react';
import ServiceTopic from "./ServiceTopic"
import interior from "../images/interior-remodeling.jpeg"
import painting from "../images/painting.jpeg"
import flooring from "../images/flooring.jpeg"
import pressure from "../images/pressure-washing.jpeg"

const Services = (props) => {
    return ( 
        <div>
            <h1>Services</h1>
            <ServiceTopic image={interior}/>
            <ServiceTopic image={painting}/>
            <ServiceTopic image={flooring}/>
            <ServiceTopic image={pressure}/>
        </div>
     );
}
 
export default Services;