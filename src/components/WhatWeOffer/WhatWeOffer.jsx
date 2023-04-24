import React, { useState } from "react";
import "./WhatWeOffer.css"; 

const WhatWeOffer = () => {
  const [activeOffer, setActiveOffer] = useState("");

  // Function to handle click event on offer item
  const handleOfferItemClick = (offer) => {
    setActiveOffer(offer);
  };

  return (
<section id="what-we-offer">
  <div id="whatWeOffer" className="container">
    <h2 className="section-title">What We Offer</h2>
    <div className="row">
      <div className="col-md-4">
        <div
          className={`offer-item ${
            activeOffer === "personal-training" ? "active" : ""
          }`}
          onClick={() => handleOfferItemClick("personal-training")}
        >
          <img
            src="https://images.everydayhealth.com/images/healthy-living/fitness/should-you-get-a-personal-trainer-722x406.jpg"
            alt="Offer 1"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">Personal Training</h3>
          <p className="offer-item-description">
            Our experienced trainers offer personalized training programs
            tailored to your fitness goals and needs.
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
            src="https://ymcacolumbus.org/sites/default/files/styles/media_full/public/2019-04/yoga1.jpg.webp?itok=EZ5XI93P"
            alt="Offer 2"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">Group Classes</h3>
          <p className="offer-item-description">
            Join our fun and energetic group classes led by certified
            instructors. We offer a variety of classes to suit all fitness
            levels. Unlimited group fitness classes (i.e. Spinning, bootcamps, yoga) included in membership prices.
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
            src="https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000"
            alt="Offer 3"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">State-of-the-Art Facilities</h3>
          <p className="offer-item-description">
            Our gym is equipped with modern and top-quality exercise
            equipment, locker rooms, and other amenities to make your
            workout experience enjoyable. Full service gym with circuit of machines, free weights and cardio machines. Full locker room facilities with free towel service
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
          <img
            src="https://www.pcrm.org/sites/default/files/styles/full_width_feature/public/2020-12/nutrition.png?itok=5zNqrBps"
            alt="Offer 4"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">Nutrition Counseling</h3>
          <p className="offer-item-description">
            Our certified nutritionists provide personalized nutrition
            counseling to help you achieve your health and fitness goals
            through proper diet and nutrition plans.
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
            src="https://www.planetfitness.com/sites/default/files/Gym%20Safety/PF_BlueCard_2.1_v2_2.png"
            alt="Offer 5"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">Personal Lockers</h3>
          <p className="offer-item-description">
            We provide personal lockers for safe and convenient storage of
            your belongings while you work out. Keep your items secure and
            have peace of mind during your fitness routine.
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
            src="https://www.ymcacassclay.org/wp-content/uploads/2020/08/Child-Watching-Kids-Area.jpg"
            alt="Offer 6"
            className="offer-item-image"
          />
          <h3 className="offer-item-title">Childcare</h3>
          <p className="offer-item-description">
            We offer onsite childcare services, so you can focus on your
            workout while your kids are in a safe and supervised
            environment. Enjoy peace of mind knowing your kids are taken
            care of while you prioritize your health and fitness.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


  );
};

export default WhatWeOffer;
