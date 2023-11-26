import React from "react";
import VMC from "./inc/Vmc";
import Service3 from "../imageDrone/slider1.jpg";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className="py-4 bg-success">
        <div className="container">
          <div className="row">
            <div className="col-md-8 my-auto">
              <h4>HAKKIMIZDA</h4>
            </div>
            <div className="col-md-4 my-auto">
              <Link to="/" className="nav-link active text-white">
                <FaHome /> Anasayfa
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-bottom ">
        <div className=" container aboutSigma">
          <div className="container">
            <h5 className="main-heading">SİGMA TARIM</h5>

            <p>
              Toprağın dostu teknolojiyi geçmişten günümüze taşıyor, geleceğin
              tarımını güvenle şekillendiriyor.
              <br />
              <br />
              Geçmişin bilgisiyle, geleceğin tarımında çözüm ortağınız
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-4">
          <div className="about-us">
            <div className="row">
              <div className="col-md-6">
                <h5>BİZİ TANIYIN</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src={Service3}
                  className="w-100 border-bottom"
                  alt="Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <VMC />
    </div>
  );
};

export default About;
