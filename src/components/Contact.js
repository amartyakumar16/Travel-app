import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:contact@travelista.com">contact@travelista.com</a>
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:+919876543210">+91 98765 43210</a>
        </p>
      </div>
      <img
        src="https://via.placeholder.com/400x200?text=Contact+Us"
        alt="Contact Us"
        className="contact-image"
      />
    </section>
  );
};

export default Contact;
