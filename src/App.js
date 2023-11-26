import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import About from "./pages/About";
import TopNav from "./components/TopNav";

// import whats_App from "./components/Whatsapp";

const App = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <whats_App /> */}
      <Footer />
    </Router>
  );
};

export default App;
