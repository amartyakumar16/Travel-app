import React from "react";
import "./JaipurPage.css";

import firstTimersImg from "../assets/images/1st.jpeg";
import artCultureImg from "../assets/images/pexels-photo-91217.webp";
import historyImg from "../assets/images/3rd.jpeg";
import couplesImg from "../assets/images/4th.jpeg";

const JaipurPage = () => {
  const categories = [
    {
      title: "First-timers",
      image: firstTimersImg,
    },
    {
      title: "Art & Culture Lovers",
      image: artCultureImg,
    },
    {
      title: "History Geeks",
      image: historyImg,
    },
    {
      title: "Couples",
      image: couplesImg,
    },
  ];

  return (
    <div className="jaipur-container">
      {/* Section 1 */}
      <h1 className="jaipur-heading">Discover the best things to do in Jaipur</h1>

      {/* Section 2 */}
      <div className="jaipur-section">
        <h2 className="jaipur-subheading">Top things to do in Jaipur</h2>
        <p className="jaipur-text">
          Even in Jaipur, people are curious to compare world experiences. Here's what travelers loved doing in New York.
        </p>
      </div>

      {/* Section 3 */}
      <div className="jaipur-section">
        <h2 className="jaipur-subheading">Jaipur, your way…</h2>
        <div className="category-container">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <img
                src={category.image}
                alt={category.title}
                className="category-img"
              />
              <div className="category-title">{category.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JaipurPage;
