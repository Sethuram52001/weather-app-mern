import axios from "axios";
import { GET_CITIES_BEGIN, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from "./types";

export const getCitiesBegin = () => ({
    type: GET_CITIES_BEGIN
});

export const getCitiesSuccess = cities => ({
    type: GET_CITIES_SUCCESS,
    payload: { cities }
});

export const getCitiesFailure = error => ({
    type: GET_CITIES_FAILURE,
    payload: { error }
});
 
export function getCities() {
    return dispatch => {
        dispatch(getCitiesBegin());
        return axios.get(`/cities`)
            .then((res) => {
                const resObj = res.data;
                const cities = [];
                resObj.map((value) => {
                    const city = {
                        cityname: value.cityname,
                        id: value._id
                    }
                    cities.push(city)
                })
                return cities
            })
            .then((cities) => {
                console.log(cities)
                dispatch(getCitiesSuccess(cities))
                return cities
            })
            .catch(error => dispatch(getCitiesFailure(error)));
    }
}