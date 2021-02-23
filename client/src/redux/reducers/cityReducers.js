import { GET_CITIES_BEGIN, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from "../actions/types";

const initialState = {
    cities: [],
    loading: false,
    error: null
}

export default function cityReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CITIES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        
        case GET_CITIES_SUCCESS: 
            return {
                ...state,
                cities: action.payload.cities,
                loading: false
            }
        
        case GET_CITIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                cities: []
            }
        
        default:
            return state;
    }
}