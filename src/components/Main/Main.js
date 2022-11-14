import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./Main.css";

const Main = () => {
  return (
    <section className="Main">
      <SearchForm />
      <About />
    </section>
  );
};

export default Main;
