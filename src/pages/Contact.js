import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Get in Touch</h2>
      <p className="contact-intro">
        I am always excited to connect,
      </p>
      <div className="contact-grid">
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <a href="tel:+916201897041">+91 62018 97041</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">✉️</span>
          <a href="mailto:amartyapatel43@gmail.com">amartyapatel43@gmail.com</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">💼</span>
          <a href="https://github.com/amartyakumar16" target="_blank" rel="noreferrer">github.com/amartyakumar16</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">🔗</span>
          <a href="https://linkedin.com/in/amartya-kumar16" target="_blank" rel="noreferrer">linkedin.com/in/amartya-kumar16</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
