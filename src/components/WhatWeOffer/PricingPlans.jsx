import React, { useState } from "react";
import {
  
  FaPhone,

} from "react-icons/fa";

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
        {showPlans ? "Hide Details" : "Membership Details"}
      </button>
      {showPlans && (
        <div className="pricingContainer">
          <h2 className="pricingTitle" id="memberships">
            Membership Plans
          </h2>
          <div className="pricingCardContainer">
            <div className="pricingCard">
              <h3>Free Pass</h3>
              <p>One week</p>
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
                {/* <li>Fitness Consultation</li> */}
              </ul>
              <a href="#here" className="findoutmore">
                Questions?
              </a>
            </div>
          </div>
          <p className="more-about-classes">Please note: Child care is $5 per visit or unlimted visits for $25 a month.</p>
          <p className="more-about-classes">
            When a member joins with a 1 year or 2 year plan they can add family
            members at a discounted rate of <strong>$25 a month.</strong>
            <p>
              We want to work with you. For any questions please reach out by
              phone or email. 
              
              <div>
                <FaPhone />
              </div>

            </p>
          </p>
          <p className="other-offers">
            {" "}
            <strong>Other offers include </strong>
          </p>
          <div className="moreOn-memberships">
            <li>$10 day pass</li>
            <li>Silver Sneakers</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingComponent;
