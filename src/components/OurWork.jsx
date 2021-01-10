import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CSS/OurWork.scss";

const OurWork = () => {
  const imgs = [
    "https://i.ibb.co/vvPHRWz/joseImg3.jpg",
    "https://i.ibb.co/QmwNCMd/joseImg1.jpg",
    "https://i.ibb.co/GM5VNQx/20200730-091756-1.jpg",
    "https://i.ibb.co/0cVsndr/20200803-123901-1.jpg",
    "https://i.ibb.co/j8R4y5H/20200730-093209.jpg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    centerMode: true,
    adaptiveHeight: true,
    fade: true,
    arrows: true,
    autoplaySpeed: 3000,
    className: 'slides'
  };

  return (
    <section id="our-work">
      <div>
        <h2 className="ourwork">OUR WORK</h2>
        <Slider {...settings}>
          {imgs.map(pic => (
            <div>
              <img className="slide" src={pic} alt=""/>
            </div>
          ))}

        </Slider>
      </div>
    </section>
  );
};

export default OurWork;

