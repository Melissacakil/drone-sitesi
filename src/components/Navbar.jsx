import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <b className="text-white">SİGMA TARIM</b>
        </Link>
        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-white">
                Anasayfa
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link active text-white">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-white">
                Hakkında
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active text-white">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
