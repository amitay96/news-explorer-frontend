import React from "react";
import "./Preloader.css";

function Preloader() {
  return (
    <div className="preloader">
      <i className="circle-preloader" />
      <p className="preloader__title">Searching for news...</p>
    </div>
  );
}

export default Preloader;
