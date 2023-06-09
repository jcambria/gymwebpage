import React, { useState } from "react";
import "./WhatWeOffer.css";
import PricingComponent from "./PricingPlans";
import michele from "./michele.jpeg";
import silverSneakers from './silverSneakers.jpeg';
import pt from './pt.jpeg';
import spinning from './spinning.jpeg'
import personalt from './personalt.jpeg';
import ClassDescription from "../Classes/ClassDescription";

const WhatWeOffer = () => {
  const [activeOffer, setActiveOffer] = useState("");

  const handleOfferItemClick = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <section id="what-we-offer">
      <div id="healthclub"  className="container">
        <h2 className="section-title-healthclub">At Our Health Club</h2>
        <div className="row">
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "personal-training" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("personal-training")}
            >
              <img
                src={pt}
                alt="Offer 1"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">Personal Training</h3>
              <p className="offer-item-description">
                Our team of certified trainers are passionate about helping you
                achieve your health and fitness goals. Whether you're a seasoned
                athlete or just starting on your fitness journey, we have
                everything you need to succeed.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "group-classes" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("group-classes")}
            >
              <img
                src={spinning}
                alt="Offer 2"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">Spinning and Group Classes</h3>
              <p className="offer-item-description">
                Experience our fun and energetic group classes led by certified
                instructors. Our classes cater to all fitness levels and are
                included in membership prices. Join us for unlimited Spinning,
                bootcamps, TRX, yoga, and more!
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "facilities" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("facilities")}
            >
              <img
                src={personalt}
                alt="Offer 3"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">State-of-the-Art Facilities</h3>
              <p className="offer-item-description">
                Our full-service gym features a vast array of quality equipment
                , spacious workout areas, lockers, and showers.
                Enjoy our circuit of machines, free weights, and cardio
                equipment, plus complimentary towel service
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "nutrition-counseling" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("nutrition-counseling")}
            >
              <img src={michele} alt="Offer 4" className="offer-item-image" />
              <h3 className="offer-item-title">Massage Therapy</h3>
              <p className="offer-item-description">
                Licensed massage therapist Michelle Robison specializes in
                enhancing clients' well-being through massage programs. Based in
                Columbus, Ohio, she graduated from the American Institute of
                Alternative Medicine. Visit her website to book an appointment{" "}
                <a
                  className="offer__link"
                  href="https://www.michellerobisonlmt.com/"
                >
                  here
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "personal-lockers" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("personal-lockers")}
            >
              <img
                src={silverSneakers}
                alt="Offer 5"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">Silver Sneakers Certified </h3>
              <p className="offer-item-description">
              Silver Sneakers is a fitness program designed specifically for older adults,
               typically 65 years and older. It offers a variety of exercise classes,
                wellness resources, and social activities to help seniors maintain their health, 
                fitness, and social connections.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`offer-item ${
                activeOffer === "childcare" ? "active" : ""
              }`}
              onClick={() => handleOfferItemClick("childcare")}
            >
              <img
                src="https://www.verywellfamily.com/thmb/gzEOBWMxL_UeQuZeVIwKcM9_CMA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Child-care-Christopher-Futcher-E-Plus-GettyImages-157726989-569fd55e3df78cafda9e8b9b.jpg"
                alt="Offer 6"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">Childcare</h3>
              <p className="offer-item-description">
              At our facility, we understand that balancing family responsibilities with fitness
               goals can be a challenge. That's why we offer the added convenience of onsite childcare 
               services, staffed by qualified professionals who create a safe and supervised environment 
               for your kids.
              </p>
            </div>
          </div>
          <PricingComponent />
        </div>
        <div>
          {/* <h2 className="ourclasses">More About Our Classes</h2> */}
        </div>
        <ClassDescription />
      </div>
    </section>
  );
};

export default WhatWeOffer;
