


import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../Header/Header.css";
import { Link } from "react-router-dom";
import Feedback from "../Landing_Page/ContactUs/Feedback"
import CardSlider from "../Header/CardSlider"
const Header = () => {
  // Generate age options dynamically
  const ageOptions = Array.from({ length: 73 }, (_, i) => i + 18);

  const [minAge, setMinAge] = useState(18);
  const [maxAge, setMaxAge] = useState(21);

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

      {/* Search Section */}
      <div className="search-section">
        <div className="search-filters">

        <div className="filter">
            <label>Gendar</label>
            <select>
              <option>Select</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="filter">
            <label>Age</label>
            <select value={minAge} onChange={(e) => setMinAge(Number(e.target.value))}>
              {ageOptions.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
            <span>to</span>
            <select value={maxAge} onChange={(e) => setMaxAge(Number(e.target.value))}>
              {ageOptions.map((age) => (
                <option key={age} value={age}>{age}</option>
              ))}
            </select>
          </div>

          <div className="filter">
            <label>Religion</label>
            <select>
              <option>Select</option>
              <option>Hindu</option>
              <option>Muslim</option>
              <option>Sikh</option>
              <option>Jain</option>
              <option>Other</option>
            </select>
          </div>

          <div className="filter">
            <label>Caste</label>
            <input type="search"></input>
          </div>

          

          <div className="filter">
            <label>State</label>
            <select>
            <option>Select</option>

              <option>Cg</option>
            </select>
          </div>

          <div className="filter">
            <label>District</label>
            <select>
            <option>Select</option>

              <option>Raipur</option>
            </select>
          </div>

          

          <button className="search-btn">
            <FaSearch /> Search
          </button>
        </div>
      </div>
    </div> 
    <br></br>
    <CardSlider/>

    <br></br>

    <Feedback/>
    <br></br>


    </>
  );
};

export default Header;