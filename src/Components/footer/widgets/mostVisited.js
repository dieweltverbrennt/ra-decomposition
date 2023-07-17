// Выводит часто посещаемые страницы

const MostVisited = ({ items }) => {
    return (
        <div className="Visited-widget">
          Посещаемое
          <ul className="Visited-widget-list">
            {items.map((item, index) => {
                return (
                    <li key={index}> {item} </li>
                );
            })}
          </ul>
        </div>
      );
};

export default MostVisited;