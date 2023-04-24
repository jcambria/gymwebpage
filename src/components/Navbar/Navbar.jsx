import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

import { BiDumbbell } from "react-icons/bi";

import "./Navbar.css";

import logo from './logo.jpg';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#whatWeOffer">What We Offer</a>
        </li>
        <li className="p__opensans">
          <a href="#ourExperts">Our Experts</a>
        </li>
        <li className="p__opensans">
          <a href="#workout">Build A Workout</a>
        </li>
        <li className="p__opensans">
          <a href="#here">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Book A Visit
        </a>
        <div />
        <a
          href="https://www.signupgenius.com/go/30e0d49ada82dabfe3-cscgroup#/"
          target="_blank"
          className="p__opensans"
        >
          Take A Class
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <RxHamburgerMenu
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <BiDumbbell
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#whatWeOffer" onClick={() => setToggleMenu(false)}>
                  What We Offer
                </a>
              </li>
              <li className="p__opensans">
                <a href="#ourExperts" onClick={() => setToggleMenu(false)}>
                  Our Experts
                </a>
              </li>
              <li className="p__opensans">
                <a href="#workout" onClick={() => setToggleMenu(false)}>
                  Build A Workout
                </a>
              </li>
              <li className="p__opensans">
                <a href="#here" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
