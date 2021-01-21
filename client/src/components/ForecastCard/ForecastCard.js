import React from 'react';
import PropTypes from "prop-types";

const ForecastCard = ({item}) => {
  console.log(item);
    return ( 
        <div className="card">
            <h3 className="card-title">Forecast Card</h3>
            <p className="card-text">day: {item.dt_txt.slice(8, 10)}</p>
            <p className="card-text">month: {item.dt_txt.slice(5, 7)}</p>
            <p className="card-text">hour: {item.dt_txt.slice(11, 13) * 1}</p>
            <p className="card-text">temp: {item.main.temp}</p>
        </div>
     );
}

ForecastCard.propTypes = {
  item: PropTypes.object
}
 
export default ForecastCard;