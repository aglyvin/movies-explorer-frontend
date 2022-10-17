import "./Promo.css"
import logo from "../../images/landing-logo.svg"

export function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
            <img src={logo} className="promo__logo" alt="Глобус из надписей"/>

    </section>
  )
}