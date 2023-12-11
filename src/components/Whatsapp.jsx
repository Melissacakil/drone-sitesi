
import React from "react";
import ReactWhatsapp from "react-whatsapp";

const Whatsapp = () => {
  return (
    <div>
      <button className="btn btn-secondary"> WHATSAPP İÇİN TIKLAYINIZ
        <ReactWhatsapp className="reactWhatsapp" number="+90 535 451 29 67" />
      </button>
    </div>
  );
};

export default Whatsapp;
