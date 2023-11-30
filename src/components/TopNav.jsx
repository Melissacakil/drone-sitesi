import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom"; /*react-router-dom'daki NavLink sayfalar arasında geçiş yapmayı sağlar bootstrap sağlamaz*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faYoutube,
  faFacebook,
  // faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
const TopNav = () => {
  const menuData = [
    {
      path: "/",
      name: "Anasayfa",
    },
    {
      path: "/about",
      name: "Hakkında",
    },
    {
      path: "/gallery",
      name: "Galeri",
    },
    {
      path: "/contact",
      name: "İletişim",
    },
  ];

  return (
    <Navbar className="navbar shadow" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">
          <b>SİGMA TARIM</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menuData.map((item) => (
              <a className="list_item" href={item.path} key={item.name}>
                <div className="list_item"> {item.name}</div>
              </a>
            ))}
          </Nav>
          <Nav className="socialMedia">
            <a
              href="https://www.facebook.com/profile.php?id=100070500115112&mibextid=LQQJ4d"
              className="facebookSocial"
            >

              <div className="icon">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
              </div>
            </a>
            <a
              href="https://instagram.com/sigmatarim?igshid=YTQwZjQ0NmI0OA=="
              className="instagramSocial"
            >
               <div className="icon">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              </div>
            </a>
          </Nav>
          <Nav className="ms-auto">
            <button className="btn btn-success">Teklif Al</button>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
