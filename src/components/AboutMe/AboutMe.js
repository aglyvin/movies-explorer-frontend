import "./AboutMe.css";
import { Link } from "react-router-dom";
import { SectionHeader } from "../SectionHeader/SectionHeader";
import studentPic from "../../images/Alexey.jpg";

export function AboutMe() {
  return (
    <section className="aboutMe">
      <div className="aboutMe__container">
        <SectionHeader title="Студент" />
        <div className="aboutMe__info-container">
          <div className="aboutMe__text-container">
            <h3 className="aboutMe__name">Алексей</h3>
            <p className="aboutMe__title">
              Студент, 41
            </p>
            <p className="aboutMe__description">Учусь в практикуме</p>
            <nav>
              <ul className="aboutMe__links">
                <li>
                  <Link
                    className="aboutMe__link transition-link"
                    to={{ pathname: "https://github.com/aglyvin" }}
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <img
            className="aboutMe__photo"
            src={studentPic}
            alt="Фото студента"
          />
        </div>
      </div>
    </section>
  );
}
