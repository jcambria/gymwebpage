import React, { useState } from "react";

import "./PricingPlans.css";

const PricingComponent = () => {
  const [showPlans, setShowPlans] = useState(false);

  const handleButtonClick = () => {
    setShowPlans(!showPlans);
  };

  return (
    <div>
      <button
        className={showPlans ? "hideButton" : "showButton"}
        onClick={handleButtonClick}
      >
        {showPlans ? "Hide Plans" : "Membership Plans"}
      </button>
      {showPlans && (
        <div className="pricingContainer">
          <h2 className="pricingTitle" id="memberships">
            Membership Plans
          </h2>
          <div className="pricingCardContainer">
            <div className="pricingCard">
              <h3>Free Pass</h3>
              <p>One week (valid local ID required) </p>
              <ul>
                <li>Full gym access</li>
                <li>Unlimted classes</li>
               
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>

            <div className="pricingCard">
              <h3>Monthly</h3>
              <p></p>
              <ul>
                <li>One month</li>
                <li>$70</li>
                <li>Three month</li>
                <li>$180</li>
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>
            <div className="pricingCard">
              <h3>1 Year</h3>
              <p>$40/month</p>
              <ul>
              <li>Full gym access</li>
                <li>Unlimted classes</li>
                
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>
            <div className="pricingCard">
              <h3>2 Year</h3>
              <p>$30/month</p>
              <ul>
              <li>Full gym access</li>
                <li>Unlimted classes</li>
                
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>
          </div>

          <div className="more-about-classes">
            We want to work with you. For any questions about pricing and other
            plans please reach out by phone or by using the contact form below.
            <div>{/* <FaPhone /> */}</div>
          </div>
          <p className="other-offers">
            {" "}
            <strong>Other Offers Include </strong>
          </p>
          <div className="moreOn-memberships">
            <li>Family member plans</li>
            <li>Child care plans available</li>
            <li>$10 day pass</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingComponent;
