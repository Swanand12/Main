import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function Form({ searchArticle }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    searchArticle(searchInput);
    navigate("/result");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="body">
      <div className="content">
        <div className="introduction">
          <h1 className="tagline">
            Uncover the Emotions <br></br> Behind the Headlines
          </h1>
          <p className="intro">
            Explore news stories with sentiment analysis to uncover emotions,
            opinions, and trends that shape headlines, gaining valuable insights
            for informed decision-making.
          </p>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search news here"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      <div className="bg-image">
        <img src="bg-image.jpg" alt="bg"></img>
      </div>
    </div>
  );
}

export default Form;
