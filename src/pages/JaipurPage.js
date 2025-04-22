import React from "react";

const JaipurPage = () => {
  const categories = [
    "First-timers",
    "Art & Culture Lovers",
    "History Geeks",
    "Couples",
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      {/* Section 1 */}
      <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
        Discover the best things to do in Jaipur
      </h1>

      {/* Section 2 */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>
          Top things to do in jaipur
        </h2>
        <p style={{ color: "#555" }}>
          Even in Jaipur, people are curious to compare world experiences. Here's what travelers loved doing in New York.
        </p>
      </div>

      {/* Section 3 */}
      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>Jaipur, your way…</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
          {categories.map((category, index) => (
            <div
              key={index}
              style={{
                padding: "10px 20px",
                border: "1px solid #ccc",
                borderRadius: "20px",
                backgroundColor: "#f9f9f9",
                fontSize: "16px",
              }}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JaipurPage;
