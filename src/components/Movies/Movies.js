import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { SearchForm } from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import { MoviesCardList } from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import React from "react";

export function Movies() {

  return (
    <>
      <Header loggedIn={true} />
      {/* <main className="movies">
        <SearchForm 
        />
        <Preloader
        />
        <MoviesCardList
        // movies={props.movies}
        button="movies__like-button" 
        />
        <button
          className={`movies__button ${true ? 'movies__button_on' : null}`}
          type="button"
          aria-label="Показать ещё фильмы"
        >
          Ещё
        </button>
      </main> */}
      <Footer />
    </>
  );
}
