import React from "react";
import { slider1, slider2, slider3 } from "../imageDrone/ImageDrone";
import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel data-bs-theme="light">
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
          <h6>Geçmişten Günümüze...</h6>
          <b />
          <b />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={slider2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
          <h6>Geçmişten Günümüze...</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider-image"
          src={slider3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
          <h6>Geçmişten Günümüze...</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
