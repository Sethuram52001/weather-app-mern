import React, { useEffect, useState } from 'react';
import Chart from '../Chart/Chart';
import Forecast from '../Forecast/Forecast';
import WeatherCard from '../WeatherCard/WeatherCard';
import { connect } from "react-redux";
import { getForecast } from '../../redux/actions/forecastActions';
import { getWeather } from '../../redux/actions/weatherActions';

const MyCityDetails = (props) => {

    const [weatherInfo, setWeatherInfo] = useState(null);
    const [forecastInfo, setforecastInfo] = useState(null);
    const [toggle, handleToggle] = useState(null);

    const handleClick = () => {
        console.log("click was called")
        handleToggle(!toggle)
    }

    useEffect(async () => {
        const searchValue = props.match.params.id;
        props.dispatch(getForecast(searchValue));
        props.dispatch(getWeather(searchValue));
        const weatherInfo = props.weatherInfo;
        const forecastInfo = props.forecastInfo;
        const date = (new Date()).toString();
        setWeatherInfo(weatherInfo);
        setforecastInfo(forecastInfo);
    }, []);

    const city = props.match.params.id;
    console.log("my city details of: "+city)
    return ( 
        <div>
            <h1 className="title">{city}</h1>
            {weatherInfo && <WeatherCard weatherInfo={weatherInfo} />}
            {/* <button onClick={() => handleToggle(!toggle)}>toggle</button> */}
            {(forecastInfo && !toggle) && <Forecast handleClick={() => handleClick()} forecastInfo={forecastInfo} />}
            {(forecastInfo && toggle) && <Chart handleClick={() => handleClick()} forecastInfo={forecastInfo} />}
        </div>
     );
}

function mapStateToProps(state) {
    return {
        forecastInfo: state.forecast.forecastInfo,
        weatherInfo: state.weather.weatherInfo
    }
}
 
export default connect(mapStateToProps)(MyCityDetails);