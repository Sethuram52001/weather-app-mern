import React from 'react';
import PropTypes from "prop-types";
import ForecastCard from '../ForecastCard/ForecastCard';

const Forecast = ({ forecastInfo }) => {

  return ( 
    <div>
      <h3>Forecast</h3>
      {forecastInfo.map(item => (
        <ForecastCard
          key={item.dt}
          temp={Math.floor(item.main.temp * 1) / 1}
          month={item.dt_txt.slice(5, 7)}
          day={item.dt_txt.slice(8, 10)}
          hour={item.dt_txt.slice(11,13)*1}
        />
      ))}
      {/*forecastInfo.toString()*/}
    </div>
   );
}

  // const forecasts = forecast.map(item => (
  //   <ForecastHour
  //     key={item.dt}
  //     temp={Math.floor(item.main.temp * 1) / 1}
  //     icon={item.weather[0].icon}
  //     month={item.dt_txt.slice(5, 7)}
  //     day={item.dt_txt.slice(8, 10)}
  //     hour={item.dt_txt.slice(11, 13) * 1}
  //   />
  // ));
 
Forecast.propTypes = {
  forecastInfo: PropTypes.array
}

export default Forecast;