import React from "react";
import { slider1, slider2, slider3 } from "../imageDrone/ImageDrone";

function Slider() {
  return (
    <>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100" alt="slider1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
              <h6>Geçmişten Günümüze...</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100" alt="slider2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
              <h6>Geçmişten Günümüze...</h6>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100" alt="slider3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Geleceğin Tarımında Çözüm Ortağınız</h5>
              <h6>Geçmişten Günümüze...</h6>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
