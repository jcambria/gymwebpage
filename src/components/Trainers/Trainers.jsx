import React from 'react';
import './Trainers.css';

import todd from './todd.jpeg';


const Trainer = ({ image, name, bio, website }) => (
  <div className="trainer-card">
    <img src={image} alt={name} className="trainer-image" />
    <h3 className="trainer-name">{name}</h3>
    <p className="trainer-bio">{bio}</p>
    <a href={website} target="_blank" rel="noopener noreferrer" className="trainer-website">
      Visit Website
    </a>
  </div>
);


const Trainers = () => {
  const trainersData = [
    {
      image: todd,
      name: 'Todd Zody',
      bio: 'Todd is a licensed Occupational Therapist, ACSM-certified exercise physiologist, and Functional Aging Specialist who owns Precision Wellness Personal Training. He creates personalized workout plans to improve strength, fitness, and overall well-being of those aged 55 and over, taking into account physical concerns and health conditions such as osteoporosis, diabetes, and arthritis.' ,
      website: 'https://precisionwellnesstraining.com/'
    },
    {
      image: 'https://www.bodybygreg.net/wp-content/uploads/2018/05/Best-Personal-Trainer-in-Columbus-Ohio.jpg',
      name: 'Heather Fries',
      bio: 'Jane Smith is a professional trainer specializing in weightlifting.',
      website: 'https://friestraining.com/'
    },
    {
      image: 'trainer3.jpg',
      name: 'Travis Davis',
      bio: 'Mike Johnson is a fitness enthusiast who focuses on functional training.',
      website: 'https://www.mikejohnson.com'
    }

  ];

  return (
    <div id='trainers' className="trainers-section">
      <h2 className="section-title-trainers">Meet Our Trainers</h2>
      <div className="trainers-container">
        {trainersData.map(trainer => (
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
