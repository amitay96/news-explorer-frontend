import React from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";
import Preloader from "../Preloader/Preloader";
import NotFound from "../NotFound/NotFound";
import About from "../About/About";
import "./Main.css";

const Main = (props) => {
  return (
    <section className="Main">
      <Header />
      <SearchForm />
      {/* <SearchResults /> */}
      {/* <Preloader /> */}
      {/* <NotFound /> */}
      <About />
    </section>
  );
};

export default Main;
