import React, { Component } from 'react';
import config from "../../config/config.json";
import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';

class Home extends Component {
    state = {
        searchValue: "",
        weatherInfo: null,
        forecast: null
    }
    
    getWeather = async (e) => {
        e.preventDefault();
        console.log(this.state.searchValue);
        const API_KEY = config.API_KEY;
        const searchValue = this.state.searchValue;
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
        this.setState({ weatherInfo, forecastInfo: data2.list });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    render() {
        const { weatherInfo, forecastInfo } = this.state;

        return ( 
            <div>
                <h1>Home</h1>
                <form onSubmit={this.getWeather}>   
                    <input type="search" onChange={this.handleChange} value={this.state.searchValue} placeholder="City..."></input>
                </form>
                {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
                {forecastInfo && <Forecast forecastInfo={forecastInfo} />}
            </div>
         );
    }
}
 
export default Home;