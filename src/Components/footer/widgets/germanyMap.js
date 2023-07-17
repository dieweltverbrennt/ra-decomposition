// Выводит виджет Карта Германии

const GermanyMap = ({ items }) => {
    return (
        <div className="German-map-widget">
          Карта Германии
          <ul className="German-map-widget-list">
            {items.map((item, index) => {
                return (
                    <li key={index}> {item} </li>
                );
            })}
          </ul>
        </div>
      );
};

export default GermanyMap;
