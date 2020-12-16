import React from 'react';
import ServiceTopic from "./ServiceTopic"
import interior from "../images/interior-remodeling.jpeg"
import painting from "../images/painting.jpeg"
import flooring from "../images/flooring.jpeg"
import pressure from "../images/pressure-washing.jpeg"
import "../CSS/Services.scss"

const Services = (props) => {
    return (
        <section id="services">
        <div className="servicesDiv">
            <h1>Services</h1>
            <ServiceTopic 
                image={interior} 
                topic="Interior Remodeling" 
                paragraph="Looking to remodel your bathroom or kitchen? We will use great attention to detail to bring your vision to life with"
                customStyle="interiorImg"
            />
            <ServiceTopic 
                image={painting} 
                topic="Painting" 
                paragraph="Have a paint project? Whether it’s covering up the old paint or starting new on the interior or exterior of your home we know the valule of a job well done"
                customStyle="paintingImg"
                side="rightFacing"
                />
            <ServiceTopic 
                image={flooring} 
                topic="Flooring" 
                paragraph="The look and feel of your floors can make or break the comfort that your home brings. That is why we don’t skip the small details on your carpet or tile."
                customStyle="flooringImg"
                />
            <ServiceTopic 
                image={pressure} 
                topic="Presurre Washing" 
                paragraph="Pressure washing is a lot of work for a job that sometimes just needs to be done and we can help with that."
                customStyle="pressureImg"
                side="rightFacing"
                />
        </div>
        </section> 
     );
}
 
export default Services;