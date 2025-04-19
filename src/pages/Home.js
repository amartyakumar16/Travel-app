import React from 'react';
import './Home.css';

import Hero from '../components/Hero';
import Destinations from '../components/Destinations';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <Destinations />
      <Packages />
      <Testimonials />
      <Blog />
      <Contact />
    </div>
  );
};

export default Home;
