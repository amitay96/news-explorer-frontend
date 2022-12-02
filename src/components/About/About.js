import React from "react";
import authorPic from "../../images/author-image.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={authorPic} className="about__pic" alt="Authors profile" />
        <div className="about__info">
          <h2 className="about__info_title">About the author</h2>
          <p className="about__info_text">
            This block describes the project author. Here you should indicate
            your name, what you do, and which development technologies you know.
            You can also talk about your experience with Practicum, what you
            learned there, and how you can help potential customers.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
