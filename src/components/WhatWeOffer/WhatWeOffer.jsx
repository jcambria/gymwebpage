import React, { useState } from "react";
import "./WhatWeOffer.css";
import PricingComponent from "./PricingPlans";
import michele from "./michele.jpeg";
import ClassDescription from "../Classes/ClassDescription";

const WhatWeOffer = () => {
  const [activeOffer, setActiveOffer] = useState("");

  const handleOfferItemClick = (offer) => {
    setActiveOffer(offer);
  };

  return (
    <section id="what-we-offer">
      <div id="healthclub" className="container">
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
                src="https://images.everydayhealth.com/images/healthy-living/fitness/should-you-get-a-personal-trainer-722x406.jpg"
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
                src="https://ymcacolumbus.org/sites/default/files/styles/media_full/public/2019-04/yoga1.jpg.webp?itok=EZ5XI93P"
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
                src="https://robbreport.com/wp-content/uploads/2022/07/Himat_WeightRoom.jpg?w=1000"
                alt="Offer 3"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">State-of-the-Art Facilities</h3>
              <p className="offer-item-description">
                Our facility features a vast array of quality equipment, as well
                as spacious workout areas designed to optimize your fitness
                experience. Full service gym with circuit of machines, free
                weights and cardio machines.
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
                src="https://www.cleanlink.com/resources/editorial/2019/locker-room-57700.jpg"
                alt="Offer 5"
                className="offer-item-image"
              />
              <h3 className="offer-item-title">Locker Room</h3>
              <p className="offer-item-description">
                We provide lockers for safe and convenient storage of your
                belongings while you work out. Along with the convenience of
                shower facilities. We offer a complimentary towel service, so
                you don't worry about bringing your own towel.
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
                We offer onsite childcare services, so you can focus on your
                workout while your kids are in a safe and supervised
                environment. Enjoy peace of mind knowing your kids are taken
                care of while you prioritize your health and fitness.
              </p>
            </div>
          </div>
          <PricingComponent />
        </div>
        <div>
          <h2 className="ourclasses">More About Our Classes</h2>
        </div>
        <ClassDescription />
      </div>
    </section>
  );
};

export default WhatWeOffer;
