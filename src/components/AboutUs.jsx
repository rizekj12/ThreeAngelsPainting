import React from 'react';
import "../CSS/AboutUs.scss"
import joseRizek from "../images/JoseRizek.jpeg"

const AboutUs = () => {
    return ( 
        <section id="about-us">
            <div>
                <h1 className="aboutUs title">ABOUT US</h1>
                    <div className="paragraphDiv">
                        <img src={joseRizek} alt="Jose Rizek"/>
                            <div className="innerParaDiv">
                                <p className="aboutUsPara">
                                    Three Angels Painting is a company started by Jose Rizek out of Franklin, North Carolina 
                                    with a goal of providing excellent flooring, interior remodeling, and painting services. 
                                    Jose has over 15 years of experience working in interior remodeling, painting, flooring, 
                                    and other home improvement services. Over his years of experience, Jose has earned a great
                                    reputation with clients as someone who truly cares about attention to detail in every home 
                                    improvement project he does. 
                                </p>
                                <p className="aboutUsPara">
                                    It has always been his firm belief that quality work and honesty are of the utmost importance 
                                    when working for a client. At Three Angels Painting, we treat every project with great care, 
                                    as we aim to make sure every client is satisfied with the end result of our work. Along with
                                    our quality work, we strive to provide fair pricing to all our clients and hope that they will 
                                    become regular customers. We believe quality work should not break the bank. 
                                </p>
                                <p className="aboutUsPara">
                                    We hope if you choose to hire Three Angels Painting, you will continue to work with us in the 
                                    future and become long term clients. We are confident that our job and professionalism will leave
                                    you satisfied with all your home improvement projects.  
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
        
     );
}
 
export default AboutUs;