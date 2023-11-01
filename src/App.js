import "./App.css";
import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import DUMMY_DATA from "./main.json";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  
  const [foundArticle, setFoundArticle] = useState(null);


  const searchArticle = (searchInput) => {

    const lowerCaseSearchInput = searchInput.toLowerCase();
    const foundArticle = DUMMY_DATA.articles.find(
      (article) => article.title.toLowerCase() === lowerCaseSearchInput
    );

    setFoundArticle(foundArticle);
  };

  return (
    <div className="container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Form searchArticle={searchArticle} />}
          ></Route>
          <Route
            path="/result"
            element={<Result article={foundArticle} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
