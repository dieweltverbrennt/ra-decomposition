// Выводит программу эфира

const Ether = ({ items }) => {
    return (
        <div className="Ether-widget">
          Эфир
          <ul className="Ether-widget-list">
            {items.map((item, index) => {
                return (
                    <li key={index}> {item} </li>
                );
            })}
          </ul>
        </div>
      );
};

export default Ether;