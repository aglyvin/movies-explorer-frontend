import React from "react";
import "./MoviesCardList.css"
import { MoviesCard } from "../MoviesCard/MoviesCard";


export function MoviesCardList() {
    return (
        <section className="moviesCardList">
            <ul className="moviesCardList__list">

                <MoviesCard
                    image="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/71/756461376655712.jpg"
                    nameRU="Кино1"
                    duration="90"
                    trailer="ya.ru"
                />
                <MoviesCard
                    image="https://www.sostav.ru/images/news/2019/08/27/qj5g0qqw_md.jpg"
                    nameRU="Кино 2"
                    duration="90"
                    trailer="ya.ru"
                />
                <MoviesCard
                    image="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/71/756461376655712.jpg"
                    nameRU="Кино 3"
                    duration="90"
                    trailer="ya.ru"
                />
                <MoviesCard
                    image="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/71/756461376655712.jpg"
                    nameRU="Кино 4"
                    duration="90"
                    trailer="ya.ru"
                />
                <MoviesCard
                    image="https://s0.rbk.ru/v6_top_pics/resized/590xH/media/img/2/71/756461376655712.jpg"
                    nameRU="Кино 5"
                    duration="90"
                    trailer="ya.ru"
                />



            </ul>
        </section>
    )
}