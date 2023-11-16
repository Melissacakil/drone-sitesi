import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import {slider2,slider3} from "../imageDrone/ImageDrone";
import "./Carousel.css"


const ResimSlider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="resim" src={slider2} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="resim" src={slider3}alt="Second slide" />
      </Carousel.Item>
      {/* Diğer resimler */}
    </Carousel>
  );
};

export default ResimSlider;