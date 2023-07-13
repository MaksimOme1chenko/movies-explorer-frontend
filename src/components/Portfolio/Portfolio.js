import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Партфолио</h3>
      <ul className="portfolio__links">
        <li>
          <a
            className="portfolio__link"
            href="https://maksimome1chenko.github.io/how-to-learn/"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт<span className="portfolio__simbol">↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://maksimome1chenko.github.io/russian-travel/index.html"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт<span className="portfolio__simbol">↗</span>
          </a>
        </li>
        <li>
          <a
            className="portfolio__link portfolio__link-border"
            href="https://spanko.mesto.nomoredomains.monster"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
            <span className="portfolio__simbol">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
export default Portfolio;
