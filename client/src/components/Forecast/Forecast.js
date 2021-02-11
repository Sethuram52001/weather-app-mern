import React from 'react';
import PropTypes from "prop-types";
import ForecastCard from '../ForecastCard/ForecastCard';
import "./Forecast.scss";

const Forecast = ({ forecastInfo, handleClick }) => {

  return ( 
    <div>
      <h3 className="title">Forecast</h3>
      <button onClick={() => handleClick()}>toggle</button>
      <div className="scrolling-wrapper">
        {forecastInfo.map(item => (
          <ForecastCard
            className="card"
            key={item.dt}
            item={item}
          />
        ))}
      </div>
    </div>
   );
}
 
Forecast.propTypes = {
  forecastInfo: PropTypes.array,
  handleClick: PropTypes.func
}

export default Forecast;