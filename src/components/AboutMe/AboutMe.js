import React from "react";
import "./AboutMe.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Portfolio from "../Portfolio/Portfolio";
import photo from "../../images/about-me.jpg"

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <SectionTitle text={"Студент"} />
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Максим</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 21 Год</p>
          <p className="about-me__bio">
            Я родился и живу в Новосибирске, закончил педагогический колледж. Я
            люблю ходить в спорт зал и проводить свободное время за играми или
            кодингом. Начал увлекаться программированием совсем недавно.
            Планирую связать свою жизнь с программированием.
          </p>
          <a
            className="about-me__github-link"
            href="https://github.com/MaksimOme1chenko"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img src={photo} alt="Фотография" className="about-me__photo" />
      </div>
      <Portfolio />
    </section>
  );
}
export default AboutMe;
