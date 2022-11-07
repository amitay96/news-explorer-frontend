import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList() {
  return (
    <section className="newsCardList">
      <h3 className="newsCardList__title">Search results</h3>
      <NewsCard />
      <button className="newsCardList__button">Show more</button>
    </section>
  );
}

export default NewsCardList;
