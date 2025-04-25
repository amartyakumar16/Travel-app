import React from "react";
import { Link } from "react-router-dom";
import "./JaipurPage.css";

import heroBanner from "../assets/images/Manali.avif";
import firstTimersImg from "../assets/images/1st.jpeg";
import artCultureImg from "../assets/images/pexels-photo-91217.webp";
import historyImg from "../assets/images/3rd.jpeg";
import couplesImg from "../assets/images/4th.jpeg";

const JaipurPage = () => {
  const categories = [
    {
      title: "First-timers",
      image: firstTimersImg,
      link: "/jaipur/first-timers",
    },
    {
      title: "Art & Culture Lovers",
      image: artCultureImg,
      link: "/jaipur/art-culture",
    },
    {
      title: "History Geeks",
      image: historyImg,
      link: "/jaipur/history",
    },
    {
      title: "Couples",
      image: couplesImg,
      link: "/jaipur/couples",
    },
  ];

  return (
    <div className="jaipur-container">
      {/* Hero Banner */}
      <div
        className="jaipur-hero"
        style={{
          backgroundImage: `url(${heroBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 className="hero-text">Discover the best things to do in Jaipur</h1>
      </div>

      {/* Top Section */}
      <div className="jaipur-section">
        <h2 className="jaipur-subheading">Top things to do in Jaipur</h2>
        <p className="jaipur-text">
          From royal palaces to bustling bazaars, Jaipur offers something for everyone. Dive into curated experiences tailored for all kinds of travelers.
        </p>
      </div>

      {/* Categories Section */}
      <div className="jaipur-section">
        <h2 className="jaipur-subheading">Jaipur, your way…</h2>
        <div className="category-container">
          {categories.map((category, index) => (
            <Link to={category.link} key={index} className="category-card">
              <img
                src={category.image}
                alt={category.title}
                className="category-img"
              />
              <div className="category-title">{category.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JaipurPage;
