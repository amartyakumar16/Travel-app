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

      {/* --- Footer Section --- */}
      <footer className="footer-container">
        <div className="footer-columns">
          <div className="footer-logo">
            <h2>travelista</h2>
            <p>Get Help 24/7</p>
            <ul>
              <li><a href="/">Help center</a></li>
              <li><a href="/">Chat with us</a></li>
              <li><a href="tel:+13478970100">Call +1 347 897 0100</a></li>
              <li><a href="mailto:support@travelista.com">support@travelista.com</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Cities</h4>
            <ul>
              <li>New York</li>
              <li>Las Vegas</li>
              <li>Rome</li>
              <li>Paris</li>
              <li>London</li>
              <li>Dubai</li>
              <li>Barcelona</li>
              <li>+170 more</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li>Our Story</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Company Blog</li>
              <li>Travel Blog</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Partners</h4>
            <ul>
              <li>Experience Providers</li>
              <li>Affiliates</li>
              <li>Creators & Influencers</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Travelista Inc, 82 Nassau St, New York, NY 10038</p>
          <p>
            <a href="/">Privacy Policy</a> • <a href="/">Terms of Usage</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
