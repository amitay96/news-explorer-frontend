import React from "react";
import authorPic from "../../images/author-image.png";
import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <img src={authorPic} className="about__pic" alt="Authors profile" />
        <div className="about__info-container">
          <h2 className="about__title">About the author</h2>
          <p className="about__text">
            Hello! My name is Amitay Kaganovich and I am a Full Stack Developer
            with experience starting from middle school in the industry of
            programing. I am skilled in both front-end and back-end development,
            with expertise in languages and frameworks such as HTML, CSS,
            JavaScript, Node.js and React. In addition to my technical skills, I
            am a highly collaborative and proactive team member who is able to
            effectively communicate with both technical and non-technical
            stakeholders. I am excited to bring my skills and experience to new
            challenges and opportunities, and I am eager to contribute to the
            success of your team.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
