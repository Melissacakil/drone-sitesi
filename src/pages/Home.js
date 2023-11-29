import React from "react";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import VMC from "./inc/Vmc";
import Service1 from "../imageDrone/img1.jpg";
import Service2 from "../imageDrone/slider2.jpg";
import Service3 from "../imageDrone/slider1.jpg";
// import card1 from "../imageDrone/card1.jpg";
import card2 from "../imageDrone/card2.jpg";
// import card3 from "../imageDrone/card3.jpg"
import Counter from "../components/Counter";

const Home = () => {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Sigma Tarım</h3>
              <div className="underline mx-auto"></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <Link to="./about" className="btn btn-warning shadow">
                Daha Fazla
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Our vision, mission and values */}
      <VMC />
      <br />
      <br />
      <Counter />
      {/*Our Services  */}

      {/* HORIZONTAL CARD YAPISI */}
      <div className="container ">

      <div className="card2 shadow">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-7">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
            <div class="col-md-5">
              <img src={card2} class="horizontalCard2" alt="Service1" />
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* HORIZONTAL CARD YAPISI */}

      {/* ÜÇLÜ CARD YAPISI */}
      <section className="section  border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service1}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 1</h6>
                  <div className="underline"></div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service2}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 2 </h6>
                  <div className="underline"></div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 ">
              <div className="card shadow">
                <img
                  src={Service3}
                  className="w-100 border-bottom"
                  alt="Services"
                />
                <div className="card-body">
                  <h6>Services 3</h6>
                  <div className="underline"></div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <Link to="/services" className="btn btn-link">
                    read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ÜÇLÜ CARD YAPISI */}
    </div>
  );
};

export default Home;
