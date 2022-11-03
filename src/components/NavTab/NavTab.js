import React, { useEffect } from 'react';
import userpic from "../../images/profile-icon.svg";
import "./NavTab.css";
import { Link } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import { HamburgerButton } from "../HamburgerButton/HamburgerButton";

export function NavTab() {
  return (
    <nav className="nav">
      <div className="nav__container">
        <Logo />
      </div>
      <div className="nav__container">
        <Link
          className="nav__link"
          to="/movies"
        >
          Фильмы
        </Link>
        <Link className="nav__link" to="/saved-movies">
          Сохраненные фильмы
        </Link>
        <Link
          className="nav__profile-link transition-link"
          to="/profile"
        >
          <p>Аккаунт</p>
          <img src={userpic} alt="юзер" />
        </Link>
        <HamburgerButton
        />
      </div>

    </nav>
  );
}
