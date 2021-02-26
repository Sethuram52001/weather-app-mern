import { combineReducers } from "redux";
import cities from "./cityReducers";
import weather from "./weatherReducer";
import forecast from "./forecastReducer";

export default combineReducers({
    cities,
    weather,
    forecast
})