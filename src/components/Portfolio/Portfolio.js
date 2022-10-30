import "./Portfolio.css";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader/SectionHeader";

export function Portfolio() {
  return (
    <section className="portfolio">
     <div className="portfolio__container">
      <SectionHeader title="Портфолио" modificator="sectionHeader_portfolio"/>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <Link className="portfolio__list-link transition-link" to={{ pathname: "https://aglyvin.github.io/how-to-learn/"}} target="_blank">
            <p className="portfolio__list-text">Статичный сайт</p>
            <div className="portfolio__list-icon"/>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link className="portfolio__list-link transition-link" to={{ pathname: "https://aglyvin.github.io/russian-travel/"}} target="_blank">
            <p className="portfolio__list-text">Адаптивный сайт</p>
            <div className="portfolio__list-icon"/>
          </Link>
        </li>
        <li className="portfolio__list-item">
          <Link className="portfolio__list-link transition-link" to={{ pathname: "https://github.com/aglyvin/react-mesto-api-full"}} target="_blank">
            <p className="portfolio__list-text">Одностраничное приложение</p>
            <div className="portfolio__list-icon"/>
          </Link>
        </li>
      </ul>
      </div>
    </section>
  );
}
