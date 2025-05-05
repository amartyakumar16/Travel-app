import React from 'react';
import './Help.css';

const Help = () => {
  return (
    <div className="help-container">
      <h2>Need Help with Your Booking?</h2>

      <div className="booking-form">
        <label htmlFor="bookingId">Booking ID</label>
        <input
          type="text"
          id="bookingId"
          placeholder="Enter your booking ID"
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email" />

        <button className="manage-booking-btn">Manage booking</button>

        <p className="chat-link">
          <a href="#">Can't find booking ID? Chat with us</a>
        </p>
      </div>

      <div className="faq-section">
        <h3>Frequently asked questions</h3>
        <input
          type="text"
          placeholder="🔍 What can we help you with?"
          className="faq-search"
        />
      </div>
    </div>
  );
};

export default Help;
