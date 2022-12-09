import React from "react";
import { useNews } from "../../contexts/NewsContext";
import "./Preloader.css";

function Preloader() {
  // const { isSearching } = useNews();

  return (
    <>
      {/* {isSearching && ( */}
      <div className="preloader">
        <i className="preloader__animation" />
        <p className="preloader__text">Searching for news...</p>
      </div>
      {/* )} */}
    </>
  );
}

export default Preloader;
