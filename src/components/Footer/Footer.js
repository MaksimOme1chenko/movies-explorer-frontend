import React from "react";
import './Footer.css'

function Footer() {
    return (
      <footer className="footer">
        <h3 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h3>
        <div className="footer__container">
          <p className="footer__copyright">
            Максим Омельченко&copy; {new Date().getFullYear()}
          </p>
          <ul className="footer__links">
            <li>
              <a
                className="footer__link"
                href="https://practicum.yandex.ru/"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс практикум
              </a>
            </li>
            <li>
              <a
                className="footer__link"
                href="https://github.com/yandex-praktikum"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
}
export default Footer