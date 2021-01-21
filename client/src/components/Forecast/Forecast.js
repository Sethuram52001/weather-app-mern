import React from 'react';
import PropTypes from "prop-types";
import ForecastCard from '../ForecastCard/ForecastCard';

const Forecast = ({ forecastInfo }) => {

  return ( 
    <div>
      <h3>Forecast</h3>
      <div className="container">{/*card-columns d-flex justify-content-center*/}
        {forecastInfo.map(item => (
          <ForecastCard
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