import React from "react";
import BarChart from "./BarChart";

function Result({ article }) {
  const barChartData = [
    { sentiment: "POSITIVE", articles: 15 },
    { sentiment: "NEGATIVE", articles: 8 },
    { sentiment: "NEUTRAL", articles: 1 },
  ];


  return (
    <div className="result">
      {article ? (
        <>
          <div className="data">
            <h2 className="title">Title: {article.title}</h2>
            <h3 className="sentiment">Sentiment: {article.sentiment.toUpperCase()}</h3>
            
          </div>
          <div className="barchart">
            <BarChart data={barChartData} />
          </div>
          <div className="reference-box">
          <p className="references">References: {article.references}</p>
          </div>
        </>
      ) : (
        <div className="empty">
          <p>Article not found</p>
        </div>
      )}
    
    </div>
  );
}

export default Result;
