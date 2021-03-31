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
import WeekCard from '../WeekCard/WeekCard';

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
        // this.props.dispatch(getWeather("Madurai"))
        // this.props.dispatch(getForecast("Madurai"))
    }

    getWeather = async (e) => {
        e.preventDefault();
        const API_KEY = config.API_KEY;
        const searchValue = e.target.elements.city.value;
        this.props.dispatch(getWeather(searchValue));
        this.props.dispatch(getForecast(searchValue));
        const weatherInfo = this.props.weatherInfo;
        const forecastInfo = this.props.forecastInfo;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
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
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December'];
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = new Date();
        const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
        this.setState({ weatherInfo, forecastInfo, icon, error: false, date });
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

        return (
            <div>
                <Searchbar className="searchbar" handleSubmit={this.getWeather} />
                <div className="HomeCard">
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
                </div>
                {/* <div className="WeekCard">
                        {forecastInfo ? <WeekCard /> : ""}
                </div> */}
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