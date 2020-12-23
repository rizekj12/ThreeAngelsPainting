import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/OurWork.scss";
import interior from "../images/interior-remodeling.jpeg";
import painting from "../images/painting.jpeg";
import flooring from "../images/flooring.jpeg";
import pressure from "../images/pressure-washing.jpeg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section id="our-work">
        <div>
          <h2 className="ourwork">OUR WORK</h2>
          <Slider {...settings}>
            <div>
              <img className="slide" src={flooring} />
            </div>
            <div>
              <img className="slide" src={painting} />
            </div>
            <div>
              <img className="slide" src={interior} />
            </div>
            <div>
              <img className="slide" src={pressure} />
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
