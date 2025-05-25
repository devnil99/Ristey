


import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Feedback from "../Landing_Page/ContactUs/Feedback"
import CardSlider from "../Header/CardSlider"
const Header = () => {
 

  return (
    <>
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="logo">Metromonilas</h1>
          <p className="description1">
            With over <strong>272m users</strong>, SWAYAMWARA is great for a
            perfect Life Partner match!
          </p>
          <Link to="/User_Reg" target="_blank"> <button className="register-btn">Register Now!</button></Link> 
        </div>
        <div className="top-links">
          <a href="/">Already a member?</a> | <Link to="/User_Reg" >Sign in</Link> |  <Link to="/User_Login">Login</Link>
        </div>
      </div>

   

    
   </div>

    </>
  );
};

export default Header;