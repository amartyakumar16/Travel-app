
import React from 'react';
import './Recommendations.css';

const recommendations = [
  {
    city: "Mumbai",
    title: "Marine Drive: Road along the coast of a natural bay in Mumbai",
    rating: "4.8",
    reviews: "(1,482)",
    image: require('../assets/images/marine drive.webp'),
  },
  {
    city: "Athens",
    title: "Acropolis Parthenon Tickets with Audio Guide",
    price: "₹3,459",
    rating: "4.5",
    reviews: "(32,162)",
    image: require('../assets/images/marine drive.webp'),
  },
  {
    city: "Rome",
    title: "From Rome: Pompeii, Amalfi Coast and Sorrento or Positano Day Trip",
    price: "₹9,512",
    rating: "4.5",
    reviews: "(133)",
    image: require('../assets/images/marine drive.webp'),
  },
  {
    city: "London",
    title: "From London: Harry Potter Studio Tickets with Coach Transfers",
    price: "₹9,600",
    rating: "4.5",
    reviews: "(8,589)",
    image: require('../assets/images/marine drive.webp'),
    originalPrice: "₹15,699",
    discount: "39% off"
  },
];

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      {recommendations.map((item, index) => (
        <div className="recommendation-card" key={index}>
          <img src={item.image} alt={item.title} className="recommendation-image" />
          <div className="recommendation-info">
            <p className="recommendation-city">{item.city}</p>
            <p className="recommendation-title">{item.title}</p>
            <p className="recommendation-rating">
              ⭐ {item.rating} <span className="reviews">{item.reviews}</span>
            </p>
            <p className="recommendation-price">
              {item.originalPrice && (
                <span className="original-price">{item.originalPrice}</span>
              )}
              {item.price}{" "}
              {item.discount && <span className="discount">({item.discount})</span>}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;