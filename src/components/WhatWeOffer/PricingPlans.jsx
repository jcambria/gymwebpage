import React, { useState } from 'react';

import './PricingPlans.css';


const PricingComponent = () => {
  const [showPlans, setShowPlans] = useState(false);

  const handleButtonClick = () => {
    setShowPlans(!showPlans);
  };

  return (
    <div>
      <button
        className={showPlans ? 'hideButton' : 'showButton'}
        onClick={handleButtonClick}
      >
        {showPlans ? 'Hide Plans' : 'See our Membership Plans'}
      </button>
      {showPlans && (
        <div className="pricingContainer">
          <h2 className="pricingTitle">Pricing Plans</h2>
          <div className="pricingCardContainer">
            <div className="pricingCard">
              <h3>Plan 1</h3>
              <p>$10/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              {/* <button>Sign Up</button> */}
            </div>
            <div className="pricingCard">
              <h3>Plan 2</h3>
              <p>$20/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              {/* <button>Sign Up</button> */}
            </div>
            <div className="pricingCard">
              <h3>Plan 3</h3>
              <p>$30/month</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              {/* <button>Sign Up</button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingComponent;
