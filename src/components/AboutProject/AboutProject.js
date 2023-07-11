import React from "react";
import './AboutProject.css'
import SectionTitle from "../SectionTitle/SectionTitle";

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <SectionTitle text={"О проекте"} />
      <div className="about-project__content">
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__info-description">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__info">
          <h3 className="about-project__info-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__info-description">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__date">
        <h3 className="about-project__date-title about-project__date-title__green">
          1 неделя
        </h3>
        <h3 className="about-project__date-title">4 недели</h3>
        <p className="about-project__date-description">Back-end</p>
        <p className="about-project__date-description">Front-end</p>
      </div>
    </section>
  );
}
export default AboutProject