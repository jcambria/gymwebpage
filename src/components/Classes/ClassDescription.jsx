import React, { useState } from "react";
import "./ClassDescription.css";

const classData = [
  {
    title: "Spinning",
    description:"An indoor cycling class that utilizes a revolutionary stationary bike to take participants through a detailed set of general exercises designed to simulate a real outdoor biking experience. This is a great workout for everyone, not just bikers.",
  },
  {
    title: "TRX/Core & Abs ",
    description: "A TRX workout that focuses on core and abdominal strengthening.",
  },
  {
    title: "Flex-a-Ball ",
    description: "A mixture of Pilates and yoga-like movements using an exercise ball to increase flexibility, stability, coordination and overall strength.",
  },
  {
    title: "Total Body Interval ",
    description: "An interval class designed to increase strength and endurance.  Instructors use a variety of equipment (BOSU, TRX Suspension trainer, weights, bands, balls) to put together a great workout for all levels.",
  },
  {
    title: "Slow Flow Yoga ",
    description: "A yoga practice that can be easily modified for a variety of needs. This class is designed to bring balance to the body with a mixture of flowing sequences and deeper stretches.",
  },
  {
    title: "Ultimate Strength",
    description: "This class will work on complete body toning and sculpting.  Strengthen your muscles using a variety of equipment (ie bars, weights, bands and etc.) and formats. Great for all levels.",
  },
  {
    title: "Flow Yoga ",
    description: "A dynamic flow through basic and challenging yoga poses that strengthen and lengthen muscles, as well as aligning posture, improving balance and relieving stress. Class pace can be energetic at times, so modifications are given along the way.",
  },
  {
    title: "Flow Yoga ",
    description: "A dynamic flow through basic and challenging yoga poses that strengthen and lengthen muscles, as well as aligning posture, improving balance and relieving stress. Class pace can be energetic at times, so modifications are given along the way.",
  },
  {
    title: "H.I.I.T.",
    description: "This class is a high intensity interval training workout which focuses on total body strengthening paired with cardio bursts.  Instructors will use a variety of equipment and formats to provide a great workout that will burn maximum calories. Modifications will be given when needed making this class perfect for all levels.",
  },
  {
    title: "Vinyasa Yoga ",
    description: " An athletic dynamic class that combines strength and breath in a flowing and flexibility building format. Instructors work on gently encouraging you forward through your practice on the mat.",
  },
];

function ClassDescription() {
  const [currentClass, setCurrentClass] = useState(0);

  const handlePrevClick = () => {
    setCurrentClass(
      currentClass === 0 ? classData.length - 1 : currentClass - 1
    );
  };

  const handleNextClick = () => {
    setCurrentClass(
      currentClass === classData.length - 1 ? 0 : currentClass + 1
    );
  };

  const { title, description } = classData[currentClass];

  return (
    <div className="class-description">
      <h2 className="class-description__title">{title}</h2>
      <p className="class-description__description">{description}</p>
      <div className="class-description__buttons">
        <button className="class-description__button" onClick={handlePrevClick}>
          Prev
        </button>
        <button className="class-description__button" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
}

export default ClassDescription;
