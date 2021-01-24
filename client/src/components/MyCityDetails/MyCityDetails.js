import React, { useEffect, useState } from 'react';
import config from "../../config/config.json";
import Chart from '../Chart/Chart';
import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';

const MyCityDetails = (props) => {

    const [weatherInfo, setWeatherInfo] = useState(null);
    const [forecastInfo, setforecastInfo] = useState(null);
    const [toggle, handleToggle] = useState(null);

    useEffect(async() => {
        const API_KEY = config.API_KEY;
        const searchValue = props.match.params.id;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        const api_call2 = await fetch(forecast);
        const data2 = await api_call2.json();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
        const date = (new Date()).toString();
        const weatherInfo = {
            city: data.name,
            country: data.sys.country,
            date,
            description: data.weather[0].description,
            temp: data.main.temp,
            highestTemp: data.main.temp_max,
            lowestTemp: data.main.temp_min,
            sunrise,
            sunset,
            clouds: data.clouds.all,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            forecast: data2.list
        }
        setWeatherInfo(weatherInfo);
        setforecastInfo(data2.list);
    })

    const city = props.match.params.id;
    console.log("my city details of: "+city)
    return ( 
        <div>
            <h1>Hello there {city}</h1>
            {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
            <button onClick={() => handleToggle(!toggle)}>toggle</button>
            {(forecastInfo && !toggle) && <Forecast forecastInfo={forecastInfo} />}
            {(forecastInfo && toggle) && <Chart forecastInfo={forecastInfo} />}
        </div>
     );
}
 
export default MyCityDetails;