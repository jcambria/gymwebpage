import React from "react";
import "./Trainers.css";

import todd from "./todd.jpeg";
import heather from "./heather.jpeg";
import trav from "./trav.jpeg";
import pete from "./pete.jpg";

const Trainer = ({ image, name, bio, website }) => (
  <div className="trainer-card">
    <img src={image} alt={name} className="trainer-image" />
    <h3 className="trainer-name">{name}</h3>
    <p className="trainer-bio">{bio}</p>
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className="trainer-website"
    >
      Visit Website
    </a>
  </div>
);

const Trainers = () => {
  const trainersData = [
    {
      image: todd,
      name: "Todd Zody",
      bio: "Todd is a licensed Occupational Therapist, ACSM-certified exercise physiologist, and Functional Aging Specialist who owns Precision Wellness Personal Training. He creates personalized workout plans to improve strength, fitness, and overall well-being of those aged 55 and over, taking into account physical concerns and health conditions such as osteoporosis, diabetes, and arthritis.",
      website: "https://precisionwellnesstraining.com/",
    },
    {
      image: heather,
      name: "Heather Fries",
      bio: "Heather is an experienced personal trainer who has been an elite athlete, US Air Force officer, and general manager in the Sports Nutrition and healthcare industries. With personalized training programs, she accommodate busy schedules, injuries, and muscle imbalances while coaching for corrective movement, weight loss, muscle toning, and sports performance. Dont let health stand between you and your day.",
      website: "https://friestraining.com/",
    },
    {
      image: trav,
      name: "Travis Davis",
      bio: 'Travis is a certified NASM-CPT and CNC trainer with a background in competitive powerlifting, football, track, and tactical sports conditioning. He uses the TD wellness model, which employs a "C.O.M.P.A.S.S" approach to help individuals gain vitality and improve their health and longevity. Travis offers personalized and adaptable programs for high school athletes, rehabilitating adults, and anyone in between.',
      website: "https://www.facebook.com/TDW3LLNESS/",
    },
    {
      image: pete,
      name: "Peter McCann",
      bio: " Peter believes that physical fitness can unlock dormant abilities and improve every aspect of life. For a decade, he has coached athletes to improve their strength, power, and speed. Peter has helped people of all ages discover their athleticism through better movement patterns and resistance training. As a CSC trainer, he feels privileged to serve the community and help individuals realize their potential.",
      website: "https://www.facebook.com/TDW3LLNESS/",
    },
  ];

  return (
    <div id="trainers" className="trainers-section">
      <h2  className="section-title-trainers">Meet Our Trainers</h2>
      <div className="container-trainers">
        <a  className="trainingform" href="#trainingform">
          Find the trainer for you
        </a>
      </div>
      <div className="trainers-container">
        {trainersData.map((trainer) => (
          <Trainer
            key={trainer.name}
            image={trainer.image}
            name={trainer.name}
            bio={trainer.bio}
            website={trainer.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Trainers;
