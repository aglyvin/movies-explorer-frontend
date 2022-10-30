import "./Header.css";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { NavTab } from "../NavTab/NavTab";

export function Header(props) {
  const loggedIn = props.loggedIn;

  return (
    <>
      {loggedIn ? (
        <header className="header">
          <NavTab/>
        </header>
      ) : (
        <header className="header">
          <div className="header__content-container">
          <Logo />
          <div className="header__links">
            <Link className="header__link transition-link" to="/signup">
              Регистрация
            </Link>
            <Link className="header__link header__link_green transition-link" to="/signin">
              Войти
            </Link>
          </div>
          </div>
        </header>
      )}
    </>
  );
}
