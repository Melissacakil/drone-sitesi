import React, { useState } from "react";
import { Container, Navbar, Nav, Modal } from "react-bootstrap";
// import { NavLink } from "react-router-dom"; /*react-router-dom'daki NavLink sayfalar arasında geçiş yapmayı sağlar bootstrap sağlamaz*/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import Whatsapp from "./Whatsapp";

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
  const [showModal, setshowModal] = useState(false);

  const handleButtonClick = () => {
    setshowModal(true);
  }

  const handleCloseModal = () => {
    setshowModal(false);
  }

  return (
    <Navbar className="navbar shadow mb-20" expand="lg">
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
          <Nav className="ms-auto">
            <Nav className="socialMedia">
              <a href="/contact" className="phoneSocial">
                <div className="icon">
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                </div>
              </a>

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
            <button onClick={handleButtonClick} className="btn btn-success">
            <FontAwesomeIcon icon={faWhatsapp} size="1x " />  Teklif Al
            </button>
            <Modal  className="modalContainer" show={showModal} onHide={handleCloseModal}>
              <Modal.Header closeButton>
                <Modal.Title className="modalTitle">Whatsapp hattımız üzerinden bilgi almak için tıklayınız</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Whatsapp />
              </Modal.Body>
              <Modal.Footer>
                <button className="btn btn-dark" onClick={handleCloseModal}>
                  Kapat
                </button>
              </Modal.Footer>
            </Modal>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
