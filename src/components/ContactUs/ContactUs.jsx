import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Multiselect from "multiselect-react-dropdown";

import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gej3c17",
        "template_jswkt2y",
        form.current,
        "C0u2SIF4K_oEnE7br"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="here">
      <div>
        <h2>Personal Training Questionnaire</h2>
        <form ref={form} onSubmit={sendEmail}>
          {/* <input
            type="text"
            placeholder="Full name"
            name="user_name"
            required
          /> */}
          <input type="email" placeholder="Email" name="user_email" required />
          {/* <input type="text" placeholder="Subject" name="subject" required /> */}
          <input
            type="number"
            placeholder="Age"
            name="user_age"
            required
            min="0"
            max="120"
          />
          <label htmlFor="maleOrFemale">Tell Us About Yourself</label>
          <select id="fitness_level" name="user_gender" required>
            <option value="">Select Your Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="trainerPreference">
            Would you like a Male or Female Trainer?
          </label>
          <select id="fitness_level" name="user_preference" required>
            <option value="">Select An Option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>

          <label htmlFor="trainingDays">What is a good day to Train?</label>
          <select id="fitness_days" name="user_trainingDays" required>
            <option value="">Select A Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>

          <label htmlFor="fitness_level">Fitness Level</label>
          <select id="fitness_level" name="user_fitnessLevel" required>
            <option value="">Select Fitness Level</option>
            <option value="Beginner">Beginner </option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <label htmlFor="fitness_objectives">Fitness Goals</label>
          <select id="fitness_level" name="user_goals" required>
            <option value="">Select An Option</option>
            <option value="Lose Weight">Lose Weight </option>
            <option value="Gain Muscle">Gain Muscle</option>
            <option value="Athletic Enhancement">Athletic Enhancement</option>
            <option value="Improve overall health and fitness level">
              Improve overall health and fitness level
            </option>
          </select>
          <h3>Tell Us More About Your Goals</h3>

          <textarea name="message" cols={20} rows={5}></textarea>
          <button>Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
