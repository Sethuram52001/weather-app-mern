import React, { Component } from 'react';
import "./Home.scss";
import config from "../../config/config.json";
import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';
import GeneralWeatherCard from "../GeneralWeatherCard/GeneralWeatherCard";
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
import { getWeather } from '../../redux/actions/weatherActions';
import { connect } from "react-redux";
import { getForecast } from '../../redux/actions/forecastActions';

class Home extends Component {
    state = {
        searchValue: "",
        weatherInfo: null,
        forecast: null,
        icon: null,
        error: false,
        toggle: false,
        date: null
    }

    componentDidMount() {
        this.props.dispatch(getWeather("Madurai"))
        this.props.dispatch(getForecast("Madurai"))
    }

    getWeather = async (e) => {
        e.preventDefault();
        //this.setState({ searchValue: e.target.elements.city.value });
        const API_KEY = config.API_KEY;
        const searchValue = e.target.elements.city.value;
        this.props.dispatch(getWeather(searchValue))
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        const api_call2 = await fetch(forecast);
        const data2 = await api_call2.json();
        const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 4);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 4);
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'Nocvember',
            'December',
        ];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${
          months[currentDate.getMonth()]
        }`;
        //const date = (new Date()).toString();
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
        this.setState({ weatherInfo, forecastInfo: data2.list, icon, error: false, date });
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleToggle = () => {
        this.setState({ toggle: !this.state.toggle });
    }

    handleClick = () => {
        console.log("button clicked");
    }

    render() {
        const { weatherInfo, forecastInfo, icon, error, toggle, date } = this.state;
        console.log(this.props.weatherInfo)
        console.log(this.props.cities)

        return (
            <div>
                <Searchbar className="searchbar" handleSubmit={this.getWeather} />
                {weatherInfo ?
                    <div className="location">
                        <div>{weatherInfo.city}, {weatherInfo.country}</div>
                        <div>{date}</div>
                    </div>
                : ""}   
                <div className="flex-container">
                    {icon ? <GeneralWeatherCard className="flex-child" weatherInfo={weatherInfo} icon={icon} /> : ""}
                    {weatherInfo && <WeatherCard className="flex-child" weatherInfo={weatherInfo} />}
                </div>
                {(forecastInfo && !toggle) && <Forecast handleClick={this.handleToggle} forecastInfo={forecastInfo} />}
                {(forecastInfo && toggle) && <Chart handleClick={this.handleToggle} forecastInfo={forecastInfo} />}
                {error && <Error />}
            </div>
         );
    }
}

function mapStateToProps(state) {
    return {
        forecastInfo: state.forecast.forecastInfo,
        weatherInfo: state.weather.weatherInfo,
        cities: state.cities.cities
    }
}

export default connect(mapStateToProps)(Home);

// info
// possible weather-condition reported from by openweathermap api : https://openweathermap.org/weather-conditions