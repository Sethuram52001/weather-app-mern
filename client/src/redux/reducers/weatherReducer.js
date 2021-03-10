import { GET_WEATHER_BEGIN, GET_WEATHER_SUCCESS, GET_WEATHER_FAILURE } from "../actions/types";

const initialState = {
    weatherInfo: null,
    loading: false,
    error: null
}

export default function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_WEATHER_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case GET_WEATHER_SUCCESS:
            console.log(action.payload.weatherInfo)
            return {
                ...state,
                weatherInfo: action.payload.weatherInfo,
                loading: false
            }
        
        case GET_WEATHER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                weatherInfo: null
            }
        
        default:
            return state;
    }
}