// Выводит новости и навигацию по новостям

const News = ({ newsCategories, newsTitles }) => {
    return (
        <div className="News">
            <nav className="News-nav">
                <ul className="News-nav-menu">
                    {newsCategories.map((category, index) => {
                        return (
                            <li
                                className={`News-nav-menu__item ${index === 0 ? 'active' : ''}`}
                                key={index}
                            >
                                <a href="#0" className="News-nav-menu__item-link">
                                    {category}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <span className="News-current-date">17 июля, понедельник 13:32</span>
            </nav>
            <div className="News-content">
                <ul>
                    {newsTitles.map((title, index) => {
                        return (
                            <li className="News-content__item" key={index}>
                                {title}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default News;