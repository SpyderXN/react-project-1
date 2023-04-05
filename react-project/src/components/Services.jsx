import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";

export const Services = () => {
  return (
    <div>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p>Full stack</p>
        </div>

        <div>
          <img src={img2} alt="Item2" />
          <p>Bike fix</p>
        </div>
      </Carousel>
    </div>
  );
};
