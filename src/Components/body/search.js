// Выводит поле поиска, навигацию по категориям, подсказку для поиска

const Search = (props) => {
    const {
        searchСategories,
        searchExample,
    } = props;

    return (
        <div className="Search">
            <nav className="Search-nav">
                <ul className="Search-nav-menu">
                    {searchСategories.map((category, index) => {
                        return (
                            <li className="Search-nav-menu__item active" key={index}>
                                <a href="#0" className="Search-nav-menu__item-link">
                                    {category}
                                </a>
                            </li>
                        );
                    })}
                    <li className="Search-nav-menu__item">
                        <a href="#0" className="Search-nav-menu__item-link">
                            ещё
                        </a>
                    </li>
                </ul>
            </nav>

            <form className="Search-bar">
                <label className="Search-bar-label" htmlFor="search-bar-input">
                    Яндекс
                </label>
                <input className="Search-bar-input" id="search-bar-input" type="text" name="search-bar-input" required />
                <button className="Search-bar-button" type="submit">
                    Найти
                </button>
            </form>

            <p className="Search-advice">
                Найдётся всё. Например,
                <span className="Search-advice__example">
                    &nbsp;{searchExample}
                </span>
            </p>

        </div>
    );
};

export default Search;