import React from "react";
import "./about.css";
import AboutImg from "../../assets/profile2.jpg";
import Info from "./Info";
import Resume from "../../assets/Resume.pdf"

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />
          <p className="about__description">
            Frontend developer, I create web pages with UI / UX user interface
          </p>

          <a download="" href={Resume} className="button button--flex">Download Resume(TH)</a>
        </div>

      </div>
    </section>
  );
};

export default About;
