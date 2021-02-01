import React from 'react';
import PropTypes from "prop-types";
import "./ForecastCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

const ForecastCard = ({ item }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = item.dt_txt.slice(8, 10);
  const month = item.dt_txt.slice(5, 7);
  const hour = item.dt_txt.slice(11, 13) * 1;
  const temp = item.main.temp;
  const month_name = months[month - 1];
  const main = item.weather[0].main;
  let icon = null;
  console.log(item.weather[0].main)

  if (main === 'Thunderstorm') {
    icon = faBolt;
  } else if (main === 'Drizzle') {
    icon = faCloudRain;
  } else if (main === 'Rain') {
    icon = faCloudShowersHeavy;
  } else if (main === 'Snow') {
    icon = faSnowflake;
  } else if (main === 'Clear') {
    icon = faSun;
  } else if (main === 'Clouds') {
    icon = faCloud;
  } else {
    icon = faSmog;
  }

    return ( 
        <div className="card">
            <div className="card-text">{`${month_name} ${day}`}</div>
            <div className="card-text">{`${hour}:00`}</div>
            <div className="card-text">{`${temp} \u00b0C`}</div>
            <FontAwesomeIcon icon={icon} />
        </div>
     );
}

ForecastCard.propTypes = {
  item: PropTypes.object
}
 
export default ForecastCard;