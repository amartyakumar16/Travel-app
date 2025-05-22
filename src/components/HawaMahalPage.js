import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/images/111.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.webp";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.webp";
import img7 from "../assets/images/C7.jpeg";
import "./HawaMahalPage.css";
import MapEmbed from "./MapEmbed";

const HawaMahalPage = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const carouselRef = useRef(null);
  const [direction, setDirection] = useState(1);
  const [likes, setLikes] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = 300 * direction;
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          setDirection(-1);
        } else if (scrollLeft <= 5) {
          setDirection(1);
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [direction]);

  const handleThumbnailClick = (index) => {
    if (carouselRef.current) {
      const scrollPosition = index * 300;
      carouselRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
    }
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      setReviews([...reviews, newReview]);
      setNewReview("");
    }
  };

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="hawa-mahal-page">
      <h1>Hawa Mahal, Jaipur</h1>

      {/* Carousel */}
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-track">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Hawa Mahal ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            className="thumbnail"
            src={image}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>

      {/* Like Button */}
      <div className="like-section">
        <button onClick={handleLike}>❤️ Like</button>
        <span>{likes} likes</span>
      </div>

      {/* Star Rating */}
      <div className="rating-section">
        <p>Rate your experience:</p>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? "star filled" : "star"}
            onClick={() => handleStarClick(index)}
          >
            ★
          </span>
        ))}
        <span> {rating}/5</span>
      </div>

      {/* Description */}
      <div className="description">
        <h2>Discover the Palace of Winds</h2>
        <ul>
          <li>Explore this iconic pink sandstone structure</li>
          <li>Enjoy stunning views of Jaipur’s City Palace</li>
          <li>Learn about Rajput architecture and history</li>
          <li>Perfect for photography and sightseeing</li>
        </ul>
      </div>

      {/* Reviews */}
      <div className="review-section">
        <h3>Visitor Reviews</h3>
        <ul>
          {reviews.map((review, idx) => (
            <li key={idx}>{review}</li>
          ))}
        </ul>
        <textarea
          placeholder="Write your review here..."
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <button onClick={handleReviewSubmit}>Submit Review</button>
      </div>

      {/* Visiting Info */}
      <div className="info-section">
        <h3>Plan Your Visit</h3>
        <p><strong>Opening Hours:</strong> 9:00 AM – 5:00 PM (Daily)</p>
        <p><strong>Entry Fee:</strong> ₹50 (Indians), ₹200 (Foreigners)</p>
        <p><strong>Best Time to Visit:</strong> October to March</p>
      </div>

      {/* Google Maps Section */}
      <div className="map-section">
        <h3>Location</h3>
        <MapEmbed />
        <p style={{ marginTop: "10px" }}>
          📍{" "}
          <a
            href="https://www.google.com/maps/place/Hawa+Mahal"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Google Maps
          </a>
        </p>
      </div>
    </div>
  );
};

export default HawaMahalPage;
