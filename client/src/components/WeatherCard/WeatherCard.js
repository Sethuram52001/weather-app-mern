import React from 'react';
import PropTypes from "prop-types";
import "./WeatherCard.css";

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
          <div className="general-weather-card">
            <div className="text">weather info: {city}</div>
            <div className="text">temp: {temp}</div>
          </div>
          <div className="weather-card">
            <div className="box">
              <div className="text">lowest temp: {lowestTemp}</div>
              <div className="text">hightest temp: {highestTemp}</div>
            </div>
            <div className="box">
              <div className="text">wind: {wind}</div>
              <div className="text">humidity: {humidity}</div>
            </div>
            <div className="box">
              <div className="text">sunrise: {sunrise}</div>
              <div className="text">sunset: {sunset}</div>
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