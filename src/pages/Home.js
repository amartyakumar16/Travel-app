import React from 'react';
import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import travelImg from '../assets/images/Kashi1.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Heading and Image Section */}
      <div className="heading-container">
        <h1 className="main-heading">Travel India</h1>
        <img src={travelImg} alt="Travel India" className="travel-banner" />
      </div>

      {/* Sections */}
      <section className="home-hero-section">
        <Hero />
      </section>

      <section className="home-section home-destinations">
        <h2 className="section-title">Top Destinations</h2>
        <Destinations />
      </section>

      <section className="home-section home-packages">
        <h2 className="section-title">Exclusive Packages</h2>
        <Packages />
      </section>

      <section className="home-section home-testimonials">
        <h2 className="section-title">What Our Travelers Say</h2>
        <Testimonials />
      </section>

      <section className="home-section home-blog">
        <h2 className="section-title">Travel Blogs</h2>
        <Blog />
      </section>

      <section className="home-section home-contact">
        <h2 className="section-title">Contact Us</h2>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
