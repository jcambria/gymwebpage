import { useRef } from "react";
import emailjs from "@emailjs/browser";

import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uuuqf9a",
        "template_n46h0d2",
        form.current,
        "JPxupsA3jRJJwF3QY"
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
    
    <section>
      <div>
        <h2 className="questions" >Training Questionnaire</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="email" placeholder="Email" name="user_email" required />

          <input
            type="number"
            placeholder="Age"
            name="user_age"
            required
            min="15"
            max="120"
          />
          <label htmlFor="maleOrFemale">Tell us more about yourself</label>
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          ></input>
          <select id="fitness_level" name="user_gender" required>
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <label htmlFor="trainerPreference">
            Do you have a preference on a male or female trainer?
          </label>
          <select id="fitness_level" name="user_preference" required>
            <option value="">Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="No Preference">No Preference</option>
          </select>

          <label htmlFor="trainingDays">What day works for you?</label>
          <select id="fitness_days" name="user_trainingDays" required>
            <option value="">Select a day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
          <label htmlFor="fitnessTime">Best time of day for you?</label>
          <select id="fitness_time" name="user_bestTime" required>
            <option value="">Select an option</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
          </select>

          <label htmlFor="fitness_level">Fitness level</label>
          <select id="fitness_level" name="user_fitnessLevel" required>
            <option value="">Select an option</option>
            <option value="Beginner">Beginner </option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <label htmlFor="fitness_objectives">Fitness goal</label>
          <select id="fitness_level" name="user_goals" required>
            <option value="">Select an option</option>
            <option value="Lose Weight">Lose Weight </option>
            <option value="Gain Muscle">Gain Muscle</option>
            <option value="Athletic Enhancement">Athletic Enhancement</option>
            <option value="Improve overall health and fitness level">
              Improve overall health and fitness level
            </option>
          </select>
          <h3>Tell us more about your goals</h3>

          <textarea name="message" cols={20} rows={5}></textarea>
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
