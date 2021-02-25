import { GET_FORECAST_BEGIN, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from "./types";
import config from "../../config/config.json";

const API_KEY = config.API_KEY;

export const getForecastBegin = () => ({
    type: GET_FORECAST_BEGIN
});

export const getForecastSuccess = () => ({
    type: GET_FORECAST_SUCCESS
});

export const getForecastFailure = () => ({
    type: GET_FORECAST_FAILURE
});

export function getForecast(city) {
    return async dispatch => {
        dispatch(getForecastBegin());
        const forecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`);
        const data = await forecast.json();
        const forecastInfo = data.list;
        console.log(forecastInfo);
        return forecastInfo;
    }
}