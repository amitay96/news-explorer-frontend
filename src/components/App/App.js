import React from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <SavedNews></SavedNews>
      <Footer />
    </div>
  );
}

export default App;
