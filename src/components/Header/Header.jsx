import React, { useState } from "react";
import { BiDumbbell } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  return (
    <div className="welcome" id="home">
      <h1>
          Columbus Sports Connection <br />
        <p className="p__text"> A Total Fitness Facility.</p>
        <p className="p__intro">Columbus Sports Connection is a complete workout facility located in the heart of Clintonville.
         As a privately owned health club with 20 years of business experience, Columbus Sports Connection is able to provide a gym that has
          </p>
          <button>Get Started</button>
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
