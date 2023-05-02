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
        {showPlans ? "Hide Details" : "Membership Plans"}
      </button>
      {showPlans && (
        <div className="pricingContainer">
          <h2 className="pricingTitle" id="memberships">
            Membership Plans
          </h2>
          <div className="pricingCardContainer">
            <div className="pricingCard">
              <h3>Free Pass</h3>
              <p>One week (vaild local ID required) </p>
              <ul>
                <li>Full gym access</li>
                <li>Child care plans</li>
                <li>Unlimted classes</li>
                {/* <li>Fitness Consultation</li> */}
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
                <li>Child care plans</li>
                <li>Unlimted classes</li>
                {/* <li>Fitness Consultation</li> */}
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
                <li>Child care plans</li>
                <li>Unlimted classes</li>
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>
          </div>

          <div className="more-about-classes">
            We want to work with you. For any questions about pricing and other
            plans please reach out by phone or the contact form below.
            <div>{/* <FaPhone /> */}</div>
          </div>
          <p className="other-offers">
            {" "}
            <strong>Other offers include </strong>
          </p>
          <div className="moreOn-memberships">
            <li>Family Member Plans</li>
            <li>Silver sneakers</li>
            <li>10$ day pass</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingComponent;
