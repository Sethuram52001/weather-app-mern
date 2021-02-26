import { GET_FORECAST_BEGIN, GET_FORECAST_FAILURE, GET_FORECAST_SUCCESS } from "../actions/types";

const initialState = {
    forecastInfo: [],
    loading: false,
    error: null
}

export default function forecastReducer(state = initialState, action) {
    switch (action.type) {
        case GET_FORECAST_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case GET_FORECAST_SUCCESS:
            console.log(action.payload.forecastInfo)
            return {
                ...state,
                forecastInfo: action.payload.forecastInfo,
                loading: false
            }
        
        case GET_FORECAST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                forecastInfo: []
            }
        
        default:
            return state;
    }
}