import React, { useState } from "react";
import { BiDumbbell } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  return (
    <div className="welcome" id="home">
      <h1>
        Welcome To CSC <br />
        <p className="p__text"> A Total Fitness Facility.</p>
        <p className="p__intro">Columbus Sports Connection is a complete workout facility located in the heart of Clintonville.
         As a privately owned health club with 20 years of business experience, Columbus Sports Connection is able to provide a gym that has
          a welcoming atmosphere to those new to fitness as well as those with exercise expertise. We feel that fitness should be part of your lifestyle...
          let us help you get started in the right direction!</p>
          <button>Get Started</button>
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
