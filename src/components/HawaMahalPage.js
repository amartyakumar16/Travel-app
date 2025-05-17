import React from "react";
import img1 from "../assets/images/111.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.webp";
import img7 from "../assets/images/C7.jpeg";
import "./HawaMahalPage.css"; // optional: if you have a CSS file

const HawaMahalPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <div className="hawa-mahal-page" style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Hawa Mahal, Jaipur
      </h1>

      <div
        className="image-gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hawa Mahal ${index + 1}`}
            style={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>

      <div className="description" style={{ marginTop: "3rem" }}>
        <h2>Edge Observation Deck Tickets: Timed Entry</h2>
        <ul>
          <li>Explore at your pace — Choose your entry time, stay as long as you like</li>
          <li>Free cancellation up to 24 hours before</li>
          <li>Instant confirmation + Mobile ticket</li>
          <li>Enjoy 360° views from 1,100 feet up</li>
          <li>Multimedia journey through Hudson Yards’ history</li>
          <li>Glass floor, angled glass wall, and skyline steps</li>
          <li>15% off at the Harry Potter Shop (till April 30)</li>
        </ul>
      </div>
    </div>
  );
};

export default HawaMahalPage;
