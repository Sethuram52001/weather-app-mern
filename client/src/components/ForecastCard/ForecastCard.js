import React from 'react';
import PropTypes from "prop-types";
import "./ForecastCard.scss";

const ForecastCard = ({ item }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = item.dt_txt.slice(8, 10);
  const month = item.dt_txt.slice(5, 7);
  const hour = item.dt_txt.slice(11, 13) * 1;
  const temp = item.main.temp;
  const month_name = months[month - 1];
  const main = item.weather[0].main;
  const icon = item.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

    return ( 
        <div className="card">
            <div className="card-text">{`${month_name} ${day}`}</div>
            <div className="card-text">{`${hour}:00`}</div>
            <div className="card-text">{`${temp} \u00b0C`}</div>
            <img src={iconUrl}></img>
        </div>
     );
}

ForecastCard.propTypes = {
  item: PropTypes.object
}
 
export default ForecastCard;