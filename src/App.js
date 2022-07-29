import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import State from "./ContextAPI/State";

import Navbar from "./UI/Navbar/Navbar";
import Home from "./Components/Home/Home";
import AboutUs from "./Components/AboutUs/AboutUs";
import Contact from "./Components/Contact/Contact";
import Buy from "./Components/Buy/Buy";
import Footer from "./UI/Footer/Footer";
import BuyNow from "./Components/Buy/BuyNow/BuyNow";
import AddToCart from "./Components/Buy/BuyNow/AddToCart/AddToCart";
import Enqurie from "./Components/Home/HeroContainer/Enqurie/Enqurie";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function App() {
  const [backToTop, setBackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <State>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/chestoBuy" element={<Buy />} />
          <Route path="/chestoBuy/buyNow" element={<BuyNow />} />
          <Route path="/chestoBuy/buyNow/addtocart" element={<AddToCart />} />
          <Route path="/inqurie" element={<Enqurie />} />
        </Routes>
        <Footer />
        {backToTop && (
          <BsFillArrowUpCircleFill
            style={{
              position: "fixed",
              bottom: "50px",
              right: "50px",
              height: "35px",
              width: "35px",
              fontSize: "50px",
            }}
            onClick={scrollUp}
          />
        )}
      </State>
    </div>
  );
}

export default App;
