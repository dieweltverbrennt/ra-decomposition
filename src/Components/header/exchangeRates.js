// Выводит курсы валют и стоимость нефти

const ExchangeRates = ({ rates }) => {
    return (
        <div className="Exchange-rates-container">
            <ul className="Exchange-rates">
                {rates.map((item, index) => {
                    return (
                        <li className="Exchange-rates__item" key={index}>
                            <a href="#0" className="Exchange-rates__item-link">
                                {item.currency}
                            </a>
                            <span className="Exchange-rates__item-rate">
                                {item.rate}
                            </span>
                        </li>
                    );
                })}
                <a href="#0" className="Exchange-rates__more-rates">
                    &#8230;
                </a>
            </ul>
        </div>
    );
};

export default ExchangeRates;