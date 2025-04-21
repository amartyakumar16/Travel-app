import React from "react";
import jaipurImage from "../assets/images/jaipur.jpg";
import goaImage from "../assets/images/goa.jpg";
import manaliImage from "../assets/images/Manali.avif";

const destinations = [
  {
    name: "Things to do in Jaipur",
    country: "India",
    image: jaipurImage,
    link: "/jaipur",
  },
  {
    name: "Things to do in Goa",
    country: "India",
    image: goaImage,
    link: "/goa",
  },
  {
    name: "Things to do in Manali",
    country: "India",
    image: manaliImage,
    link: "/manali",
  },
];

const TopDestinations = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        Explore India's top destinations
      </h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {destinations.map((destination, index) => (
          <a
            href={destination.link}
            key={index}
            style={{
              width: "220px",
              textDecoration: "none",
              color: "inherit",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={destination.image}
              alt={destination.name}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h3 style={{ marginTop: "10px", fontSize: "18px" }}>{destination.name}</h3>
            <p style={{ color: "gray" }}>{destination.country}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopDestinations;
