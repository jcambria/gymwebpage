import React, { useState } from "react";

import { RxHamburgerMenu } from "react-icons/rx";

import { BiDumbbell } from "react-icons/bi";

import "./Navbar.css";

import logo from "./logo.jpg";

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
          <a href="#healthclub">Health Club</a>
        </li>
        <li className="p__opensans">
          <a href="#trainers">Trainers</a>
        </li>
        <li className="p__opensans">
          <a href="#workout">Workout</a>
        </li>
        <li className="p__opensans">
          <a href="#here">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a
          href="https://www.signupgenius.com/go/30e0d49ada82dabfe3-cscgroup#/"
          target="_blank"
        >
          Class Schedule
        </a>

        <div />
        <a
          href="https://www.signupgenius.com/go/30e0d49ada82dabfe3-csckids#/"
          target="_blank"
        >
          Child Care
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
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a href="#healthclub" onClick={() => setToggleMenu(false)}>
                  Health Club
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a href="#trainers" onClick={() => setToggleMenu(false)}>
                  Trainers
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a href="#workout" onClick={() => setToggleMenu(false)}>
                  Workout
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a href="#here" onClick={() => setToggleMenu(false)}>
                  Contact
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="https://www.signupgenius.com/go/30e0d49ada82dabfe3-cscgroup#/"
                  target="_blank"
                >
                  Class Schedule
                  <hr className="navbar-hr" />
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="https://www.signupgenius.com/go/30e0d49ada82dabfe3-csckids#/"
                  target="_blank"
                >
                  Child Care
                  <hr className="navbar-hr" />
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
