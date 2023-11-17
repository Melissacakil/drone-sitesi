import React from "react";
import Cards from "../components/Card";
import BasicAccordion from "../components/Accordion";
import ResimSlider from "../components/Carousel";
import { Navbar } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Navbar/>
      <ResimSlider />
      <Cards />
      <BasicAccordion />
    </>
  );
};

export default Home;
