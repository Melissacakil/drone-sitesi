import React from "react";
import Cards from "../components/Card";
import BasicAccordion from "../components/Accordion";
import ResimSlider from "../components/Carousel";

const Home = () => {
  return (
    <>
      <ResimSlider />
      <Cards />
      <BasicAccordion />
    </>
  );
};

export default Home;
