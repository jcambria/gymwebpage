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
        {showPlans ? "Hide Details" : "Membership Details"}
      </button>
      {showPlans && (
        <div className="pricingContainer">
          <h2 className="pricingTitle">Membership Plans</h2>
          <div className="pricingCardContainer">
            <div className="pricingCard">
              <h3>Free</h3>
              <p>One Week</p>
              <ul>
                <li>Full Access</li>
                {/* <li>Child Care</li> */}
                <li> Unlimted Classes</li>
                {/* <li>Fitness Consultation</li> */}
              </ul>
              <a href="#here" className="findoutmore">
                Find out more
              </a>
            </div>
            <div className="pricingCard">
              <h3>1 Year</h3>
              <p>$40/month</p>
              <ul>
                <li>Full Access</li>
                {/* <li>Child Care</li> */}
                <li>Unlimted Classes</li>
                {/* <li>Fitness Consultation</li> */}
              </ul>
              <a href="#here" className="findoutmore">
                Find out more
              </a>
            </div>
            <div className="pricingCard">
              <h3>2 Year</h3>
              <p>$30/month</p>
              <ul>
                <li>Full Access</li>
                {/* <li>Child Care</li> */}
                <li>Unlimted Classes</li>
                {/* <li>Fitness Consultation</li> */}
              </ul>
              <a href="#here" className="findoutmore">
                Find out more
              </a>
            </div>
            {/* <div className="pricingCard">
              <h3>3 month</h3>
              <p>$180.000</p>
              <ul>
                <li>Full Access</li>
                <li>Child Care</li>
                <li>Classes</li>
                <li>Fitness Consultation</li>
              </ul>
              <a href="#home" className='findoutmore'>Find out more</a>
            </div> */}
          </div>
          <p className="more-about-classes">
            When a member joins with a 1 year or 2 year plan they can add family
            members for <strong>$25 a month.</strong>
            <p>
              We want to work with you. For any questions please reach out by
              phone or email.
            </p>
            {/* <strong>$25 a month</strong> <a href="">sign up</a>{" "} */}
          </p>
          <p className="other-offers">
            {" "}
            <strong>Other offers include </strong>
          </p>
          <div className="moreOn-memberships">
            <li>$10 day pass</li>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingComponent;
