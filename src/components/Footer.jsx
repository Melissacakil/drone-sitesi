import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 ">
            <h6>Company Information</h6>
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
            <h6>Quick Links</h6>
            <hr />
            <div>
              <Link to="./">Home </Link> 
            </div>
            <div>
              <Link to="./">About </Link> 
            </div>
            <div>
              <Link to="./">Contact </Link> 
            </div>
            <div>
              <Link to="./">Blog </Link> 
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information</h6>
            <hr />
            <div>  
              <p className="text-white mb-1">#64 Turkey Sariyer</p>
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
