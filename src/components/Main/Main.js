import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import "./Main.css";

const Main = (props) => {
  return (
    <section className="Main">
      <Header />
      <SearchForm />
      <About />
    </section>
  );
};

export default Main;
