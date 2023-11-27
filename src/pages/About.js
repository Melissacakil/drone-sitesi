import React from "react";
import VMC from "./inc/Vmc";
import Service3 from "../imageDrone/slider1.jpg";

const About = () => {
  return (
    <div>
      <div className=" container aboutSigma">
        <div className="col-md-12 mb-10 text-center">
          <p> Geçmişin bilgisiyle, geleceğin tarımında çözüm ortağınız</p>
        </div>
      </div>
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
              <section className="section border-bottom "></section>
            </div>
          </div>
        </div>
      </section>
      <div className=" container aboutSigma">
        <div className="col-md-12 mb-4 text-center">
          <p>
            Toprağın dostu teknolojiyi geçmişten günümüze taşıyor, geleceğin
            tarımını güvenle şekillendiriyor.
          </p>
        </div>
      </div>
      <VMC />
    </div>
  );
};

export default About;
