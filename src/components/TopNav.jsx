import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"; /*react-router-dom'daki NavLink sayfalar arasında geçiş yapmayı sağlar bootstrap sağlamaz*/

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
              <NavLink to={item.path} key={item.name}>
                <div className="list_item"> {item.name}</div>
              </NavLink>
            ))}
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
