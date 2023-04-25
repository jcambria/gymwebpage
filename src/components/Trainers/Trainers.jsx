import React from 'react';
import './Trainers.css';

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
      image: 'https://precisionwellnesstraining.com/wp-content/uploads/Precision_Wellness_151b.jpg',
      name: 'John Doe',
      bio: 'John Doe is a certified fitness trainer with 10 years of experience.',
      website: 'https://www.johndoe.com'
    },
    {
      image: 'https://www.bodybygreg.net/wp-content/uploads/2018/05/Best-Personal-Trainer-in-Columbus-Ohio.jpg',
      name: 'Jane Smith',
      bio: 'Jane Smith is a professional trainer specializing in weightlifting.',
      website: 'https://www.janesmith.com'
    },
    {
      image: 'trainer3.jpg',
      name: 'Mike Johnson',
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
