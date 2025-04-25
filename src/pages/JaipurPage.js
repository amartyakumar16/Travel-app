import React from "react";
import { Link } from "react-router-dom";
import "./JaipurPage.css";

import heroBanner from "../assets/images/Manali.avif";
import firstTimersImg from "../assets/images/1st.jpeg";
import artCultureImg from "../assets/images/pexels-photo-91217.webp";
import historyImg from "../assets/images/3rd.jpeg";
import couplesImg from "../assets/images/4th.jpeg";
import attraction1Img from "../assets/images/jaipur.jpg"; // new uploaded image

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

  const attractions = [
    {
      title: "Hawa Mahal",
      price: "from ₹1,200",
      image: attraction1Img,
      link: "/jaipur/hawa-mahal",
    },
    {
      title: "Amber Fort",
      price: "from ₹1,800",
      image: attraction1Img,
      link: "/jaipur/amber-fort",
    },
    {
      title: "City Palace",
      price: "from ₹1,500",
      image: attraction1Img,
      link: "/jaipur/city-palace",
    },
    {
      title: "Jantar Mantar",
      price: "from ₹900",
      image: attraction1Img,
      link: "/jaipur/jantar-mantar",
    },
    {
      title: "Nahargarh Fort",
      price: "from ₹1,300",
      image: attraction1Img,
      link: "/jaipur/nahargarh-fort",
    },
    {
      title: "Albert Hall Museum",
      price: "from ₹700",
      image: attraction1Img,
      link: "/jaipur/albert-hall",
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
        <div className="attractions-container">
          {attractions.map((attraction, index) => (
            <Link to={attraction.link} key={index} className="attraction-card">
              <img
                src={attraction.image}
                alt={attraction.title}
                className="attraction-img"
              />
              <div className="attraction-title">{attraction.title}</div>
              <div className="attraction-price">{attraction.price}</div>
            </Link>
          ))}
        </div>
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
