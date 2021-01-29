import React from 'react';
import PropTypes from "prop-types";
import ForecastCard from '../ForecastCard/ForecastCard';
import "./Forecast.scss";

const Forecast = ({ forecastInfo }) => {

  return ( 
    <div>
      <h3>Forecast</h3>
      <div className="scrolling-wrapper">{/*card-columns d-flex justify-content-center*/}
        {forecastInfo.map(item => (
          <ForecastCard
            className="card"
            key={item.dt}
            item={item}
          />
        ))}
      </div>
      {/*forecastInfo.toString()*/}
    </div>
   );
}
 
Forecast.propTypes = {
  forecastInfo: PropTypes.array
}

export default Forecast;