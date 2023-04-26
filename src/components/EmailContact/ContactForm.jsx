import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Multiselect from "multiselect-react-dropdown";
import "./ContactForm.css"; // Import CSS file for styling

const ContactUs = () => {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gej3c17",
        "template_92cw8a4",
        form.current,
        "C0u2SIF4K_oEnE7br"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="here/contact" className="contact-section">
      <div className="contact-container">
        {showMessage ? (
          <div className="thank-you-container">
            <h2 className="thank-you-heading">Thanks for your submission!</h2>
            <p className="thank-you-text">
              We will get back to you soon.
            </p>
          </div>
        ) : (
          <div className="form-container">
            <h2 className="form-heading">How Can We Help?</h2>
            <form ref={form} onSubmit={sendEmail} className="form">
              <input
                type="text"
                placeholder="Full name"
                name="user_name"
                required
                className="form-input"
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="user_email"
                required
                className="form-input"
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="form-input"
              />

              <textarea
                name="message"
                cols={20}
                rows={5}
                className="form-textarea"
              ></textarea>
              <button className="form-button">Send</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactUs;
