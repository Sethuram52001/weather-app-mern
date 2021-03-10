import { GET_FORECAST_BEGIN, GET_FORECAST_SUCCESS, GET_FORECAST_FAILURE } from "./types";
import config from "../../config/config.json";
import axios from "axios";

const API_KEY = config.API_KEY;

export const getForecastBegin = () => ({
    type: GET_FORECAST_BEGIN
});

export const getForecastSuccess = (forecastInfo) => ({
    type: GET_FORECAST_SUCCESS,
    payload: { forecastInfo }
});

export const getForecastFailure = (error) => ({
    type: GET_FORECAST_FAILURE,
    payload: { error }
});

export function getForecast(city) {
    return dispatch => {
        dispatch(getForecastBegin());
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`)
            .then((res) => {
                return res.data
            })
            .then((data) => {
                const forecastInfo = data.list;
                dispatch(getForecastSuccess(forecastInfo))
                return forecastInfo;
                console.log(forecastInfo)
            })
            .catch(error => dispatch(getForecastFailure(error)))
    }
}