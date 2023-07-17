// Выводит телепрограмму

const TVProgram = ({ items }) => {
    return (
        <div className="TV-program-widget">
          телепрограмма
          <ul className="TV-program-widget-list">
            {items.map((item, index) => {
                return (
                    <li key={index}> {item} </li>
                );
            })}
          </ul>
        </div>
      );
};

export default TVProgram;