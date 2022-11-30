import React from "react";
import authorPic from '../../images/author-image.png';
import "./About.css";

function About() {
  return (
    <section className="about">
      <img
        src={authorPic}
        className="about__pic"
        alt="Authors profile"
      />
      <div className="about__container">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with Practicum, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
