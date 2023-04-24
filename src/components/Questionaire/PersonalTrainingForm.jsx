// import React, { useState } from 'react';
// import './PersonalTrainingForm.css'; // Import the CSS file for styling

// const PersonalTrainingForm = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [email, setEmail] = useState('');
//   const [goal, setGoal] = useState('');
//   const [experience, setExperience] = useState('');

//   const handleSubmit = () => {
//     // Gather the filled out information
//     const formData = {
//       name: name,
//       age: age,
//       email: email,
//       goal: goal,
//       experience: experience
//     };

//     // Send the information via email
//     const emailBody = `Name: ${name}\nAge: ${age}\nEmail: ${email}\nGoal: ${goal}\nExperience: ${experience}`;
//     const emailSubject = 'Personal Training Questionnaire Response';
//     const mailToLink = `mailto:you@example.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
//     window.location.href = mailToLink;
//   };

//   return (
//     <div className="form-container" id="here">
//       <h1 className="form-title" >Personal Training Questionnaire</h1>
//       <form className="form" onSubmit={handleSubmit}>
//         <label className="form-label">
//           Name:
//           <input className="form-input" type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label className="form-label">
//           Age:
//           <input className="form-input" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
//         </label>
//         <label className="form-label">
//           Email:
//           <input className="form-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <label className="form-label">
//           Goal:
//           <select className="form-input" value={goal} onChange={(e) => setGoal(e.target.value)}>
//             <option value="">Select a goal</option>
//             <option value="Weight loss">Weight loss</option>
//             <option value="Muscle gain">Muscle gain</option>
//             <option value="Improved fitness">Improved fitness</option>
//             <option value="Injury recovery">Injury recovery</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label className="form-label">
//           Experience:
//           <select className="form-input" value={experience} onChange={(e) => setExperience(e.target.value)}>
//             <option value="">Select your experience level</option>
//             <option value="Beginner">Beginner</option>
//             <option value="Intermediate">Intermediate</option>
//             <option value="Advanced">Advanced</option>
//           </select>
//         </label>
//         <button className="form-button" type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PersonalTrainingForm;
