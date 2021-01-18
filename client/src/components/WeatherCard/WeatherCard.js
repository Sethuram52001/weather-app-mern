import React from 'react';
import PropTypes from "prop-types";

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
        <p>weather info: {city}</p>
        <p>highest temp: {highestTemp}</p>
        <p>lowest temp: {lowestTemp}</p>
        <p>hightest temp: {highestTemp}</p>
        <p>wind: {wind}</p>
        <p>humidity: {humidity}</p>
        <p>sunrise: {sunrise}</p>
        <p>sunset: {sunset}</p>
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