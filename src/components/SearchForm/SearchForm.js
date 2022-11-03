import "./SearchForm.css"

export function SearchForm(props) {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <label className="searchForm__panel">
                    <input
                        type="search"
                        className="searchForm__input"
                        id="searchForm__movie-input"
                        placeholder="Фильм"
                        aria-label="Искать фильм"
                        name="movieSearchInput"
                        required
                    />
                    <button
                        className="searchForm__button transition-button"
                        type="submit"
                    />
                </label>
                <div className="searchForm__switch">
                    <label className="searchForm__switch-container" >
                        <input
                            id="short-movies"
                            className="searchForm__switch-checkbox"
                            type="checkbox"
                        />
                        <p className="searchForm__switch-text">Короткометражки</p>
                    </label>
                </div>
            </form>
        </section>
    )
}