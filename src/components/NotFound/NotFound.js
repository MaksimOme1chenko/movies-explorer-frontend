import React from "react";
import './NotFound.css'

function NotFound({ onNavigateToBack }) {
  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__link" type="button" onClick={onNavigateToBack}>Назад</button>
    </section>
  );
}
export default NotFound;