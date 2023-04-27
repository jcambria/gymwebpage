import React from "react";
import { BiDumbbell } from "react-icons/bi";
import "./Header.css";

const Header = () => {
  return (
    <div className="welcome" id="home">
      <h1>
        Columbus Sports Connection <br />
        <p className="p__text"> A Total Fitness Facility.</p>
        <p className="p__intro">
          Locally owned and operated in the heart of Clintonville since 1989,
          Columbus Sports Connection provides a supportive and inclusive
          environment for individuals of all fitness levels. Our facility
          features a vast array of quality equipment, as well as spacious
          workout areas designed to optimize your fitness experience. Our team
          of certified trainers and group exercise instructors is passionate
          about helping you achieve your health and fitness goals. Whether
          you're a seasoned athlete or just starting on your fitness journey, we
          have everything you need to succeed. Visit us today and experience for
          yourself why Columbus Sports Connection has been the premier gym in
          town for over 30 years.
        </p>
        <a className="header__contactlink" href="#here">Contact Us</a> 
      </h1>
    </div>
  );
};

export default Header;
