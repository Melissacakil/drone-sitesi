import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 ">
            <h6>Şirket Bilgisi</h6>
            <hr />
            <p className="text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati dolorem adipisci fugiat vitae molestiae excepturi iure
              maiores tempore necessitatibus. Consequatur, labore dolore?
              Doloribus qui iusto consequuntur rerum. Sapiente, ratione nisi!
              Odio possimus similique nam quo ratione voluptatum ipsum
            </p>
          </div>

          <div className="col-md-4">
            <h6>Hızlı Link</h6>
            <hr />
            <div>
              <Link to="/">Anasayfa </Link>
            </div>
            <div>
              <Link to="/about">Hakkında </Link>
            </div>
            <div>
              <Link to="/gallery">Galeri </Link>
            </div>
            <div>
              <Link to="/contact">İletişim </Link>
            </div>
          </div>
          <div className="col-md-4">
            <h6>İletişim Bilgisi</h6>
            <hr />
            <div>
              <p className="text-white mb-1">#31 Hatay, Türkiye </p>
            </div>

            <div>
              <p className="text-white mb-1">+90 515 545 54 55</p>
            </div>

            <div>
              <p className="text-white mb-1">+90 535 585 45 45</p>
            </div>

            <div>
              <p className="text-white mb-1">email@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
