import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  // State to store form data
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Make sure that EmailJS keys are filled in
    emailjs
      .sendForm('service_8qinr68', 'template_aneb7ep', form.current, 'qZZ2OITncnsf1XpN1Y')
      .then(
        () => {
          console.log('SUCCESS!');
          setIsSubmitted(true); // Show success message on submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Something went wrong! Please try again.');
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail} className="contact-form" ref={form}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="your_name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="your_email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        {isSubmitted && (
          <p className="thank-you">
            Thank you for reaching out! I will get back to you soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
