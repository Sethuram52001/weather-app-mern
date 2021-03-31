import React from 'react';
import PropTypes from "prop-types";
import "./WeatherCard.scss";

const WeatherCard = ({ weatherInfo }) => {

    const {
        city,
        country,
        date,
        description,
        main,
        temp,
        sunset,
        sunrise,
        humidity,
        wind,
        highestTemp,
        lowestTemp,
        forecast,
    } = weatherInfo;
  
    return ( 
        <div>
          <div className="weather-card">
            <div className="box">
              <div className="text">{lowestTemp}&deg;C</div>
              <div className="text">low</div>
              <div className="text">{highestTemp}&deg;C</div>
              <div className="text">high</div>
            </div>
            <div className="box">
              <div className="text">{wind} M/S</div>
              <div className="text">wind</div>
              <div className="text">{humidity}%</div>
              <div className="text">humidity</div>
            </div>
            <div className="box">
              <div className="text">{sunrise} AM</div>
              <div className="text">sunrise</div>
              <div className="text">{sunset} PM</div>
              <div className="text">sunset</div>
            </div>
          </div>
        </div>
     );
}

WeatherCard.propTypes = {
  weatherInfo: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.string,
    temp: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    humidity: PropTypes.number,
    wind: PropTypes.number,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
    forecast: PropTypes.array,
  }).isRequired,
};
 
export default WeatherCard;