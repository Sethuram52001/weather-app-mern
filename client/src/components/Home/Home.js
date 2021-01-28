import React, { Component } from 'react';
import "./Home.scss";
import config from "../../config/config.json";
import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';
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
import Chart from '../Chart/Chart';
import Error from "../Error/Error";
import Searchbar from '../Searchbar/Searchbar';

class Home extends Component {
    state = {
        searchValue: "",
        weatherInfo: null,
        forecast: null,
        icon: null,
        error: false,
        toggle: false
    }

    getWeather = async (e) => {
        e.preventDefault();
        //this.setState({ searchValue: e.target.elements.city.value });
        const API_KEY = config.API_KEY;
        const searchValue = e.target.elements.city.value;
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
            main: data.weather[0].main,
            temp: data.main.temp,
            highestTemp: data.main.temp_max,
            lowestTemp: data.main.temp_min,
            sunrise,
            sunset,
            clouds: data.clouds.all,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            forcast: data2.list
        }
        let main = data.weather[0].main, icon = null;
        // selecting weather icon
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
        this.setState({ weatherInfo, forecastInfo: data2.list, icon, error: false });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    render() {
        const { weatherInfo, forecastInfo, icon, error, toggle } = this.state;

        return (
            <div>
                <h1>Home</h1>
                <Searchbar handleGetWeather={this.getWeather} />
                {/* <form onSubmit={this.getWeather}>
                    <input type="search" onChange={this.handleChange} value={this.state.searchValue} placeholder="City..."></input>
                </form> */}
                {icon ? <FontAwesomeIcon icon={icon} /> : ""}
                {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
                <button onClick={this.handleToggle}>toggle</button>
                {(forecastInfo && !toggle) && <Forecast forecastInfo={forecastInfo} />}
                {(forecastInfo && toggle) && <Chart forecastInfo={forecastInfo} />}
                {error && <Error />}
            </div>
         );
    }
}

export default Home;

// info
// possible weather-condition reported from by openweathermap api : https://openweathermap.org/weather-conditions