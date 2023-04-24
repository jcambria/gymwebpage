import { useRef } from "react";
import emailjs from "@emailjs/browser";

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
    <section>
      <div>
        <h2>ContactUs</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="full name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <input type="text" placeholder="age" name="user_age" required />
          <label htmlFor="fitness_level">Tell Us About Yourself</label>
          <select id="fitness_level" name="user_gender" required>
            <option value="">Select Your Gender</option>
            <option value="beginner">Male</option>
            <option value="intermediate">Female</option>
          </select>
          <label htmlFor="fitness_level">Fitness Level</label>
          <select id="fitness_level" name="user_fitnessLevel" required>
            <option value="">Select Fitness Level</option>
            <option value="beginner">Beginner </option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          
          <textarea name="message" cols={30} rows={10}></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
