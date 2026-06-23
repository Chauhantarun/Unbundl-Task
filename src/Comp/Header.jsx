import React from "react";
import "./header.css";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <header className="offer-header">
      <div className="header-top">
        <div className="logo-wrapper">
          <img
            src="../src/img/1.png"
            alt="Whistle and Smile"
            className="logo"
          />
        </div>

        <button className="call-btn">
          <FiPhoneCall />
        </button>
      </div>

      <div className="offer-strip">
        <p>
          Starting at{" "}
          <strike className="old-price-header">Rs 69,999</strike>{" "} 
          <span className="new-price-header">Rs 47,999 .</span>Hurry! Offer ends soon.
          
         
        </p>
      </div>
    </header>
  );
};

export default Header;