import { GET_WEATHER_BEGIN, GET_WEATHER_FAILURE, GET_WEATHER_SUCCESS } from "./types";
import config from "../../config/config.json";
import axios from "axios";

const API_KEY = config.API_KEY;

export const getWeatherBegin = () => ({
    type: GET_WEATHER_BEGIN
});

export const getWeatherSuccess = (weatherInfo) => ({
    type: GET_WEATHER_SUCCESS,
    payload: { weatherInfo }
});

export const getWeatherFailure = error => ({
    type: GET_WEATHER_FAILURE,
    payload: { error }
});

export function getWeather(city) {
    return dispatch => {
        dispatch(getWeatherBegin());
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`)
            .then((res) => {
                return res.data
            })
            .then((data) => {
                const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString().slice(0, 4);
                const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString().slice(0, 4);
                const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Nocvember', 'December'];
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const currentDate = new Date();
                const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
                const weatherInfo = {
                    city: data.name,
                    country: data.sys.country,
                    date,
                    description: data.weather[0].description,
                    main: data.weather[0].main,
                    temp: Math.round(data.main.temp),
                    highestTemp: Math.round(data.main.temp_max),
                    lowestTemp: Math.round(data.main.temp_min),
                    sunrise,
                    sunset,
                    clouds: data.clouds.all,
                    humidity: data.main.humidity,
                    wind: Math.round(data.wind.speed)
                }
                dispatch(getWeatherSuccess(weatherInfo))
                return weatherInfo;
            })
            .catch(error => dispatch(getWeatherFailure(error)))
    }
}