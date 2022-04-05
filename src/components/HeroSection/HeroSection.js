import React from "react";
import "./HeroSection.css";
import image from "../../img/book.jpg";

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>Famous Books All around the world!!</h1>
        <h3>Buy it before out of the stock...</h3>
        <button>
          <a src="/">Click for Buy</a>
        </button>
      </div>
      <div className="image-container">
        <img src={image} alt=""></img>
      </div>
    </div>
  );
};

export default HeroSection;
