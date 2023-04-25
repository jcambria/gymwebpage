import React, { useState } from "react";
import { BiDumbbell } from "react-icons/bi";

import "./Header.css";

const Header = () => {
  return (
    <div className="welcome" id="home">
      <h1>
          Columbus Sports Connection <br />
        <p className="p__text"> A Total Fitness Facility.</p>
        <p className="p__intro">Columbus Sports Connection, nestled in Clintonville, 
        is a premier workout facility with 20 years of experience. As a locally owned health club, 
        we offer a welcoming atmosphere for fitness newbies and seasoned enthusiasts alike. 
        
        Join us at Columbus Sports Connection to start your fitness journey with confidence!
          </p>
          <button>Get Started</button>
      </h1>
      <div></div>
    </div>
  );
};

export default Header;
