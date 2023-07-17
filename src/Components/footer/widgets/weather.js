// Выводит виджет погоды

const Weather = (props) => {
    const {
        averageTemperature,
        morningTemperature,
        daytimeTemperature,
      } = props;

      return (
        <div className="Weather-widget">
          Погода
          <div className="Weather-widget-degrees">
            <span className="Weather-widget-degrees__average">
              {averageTemperature}&deg;
            </span>
            <div className="Weather-widget-degrees__in-detail">
              <span className="Weather-widget-degrees__in-detail-morning">
                Утром {morningTemperature},
              </span>
              <span className="Weather-widget-degrees__in-detail-afternoon">
                днём {daytimeTemperature}
              </span>
            </div>
          </div>
        </div>
      );
};

export default Weather;