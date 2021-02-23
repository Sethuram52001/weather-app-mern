import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../config/config.json";
import { Link, useHistory } from "react-router-dom";
import "./MyCityCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCaretDown,
    faCaretUp
} from '@fortawesome/free-solid-svg-icons';

const MyCityCard = ({ city, handleDelete }) => {
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");
    const history = useHistory();

    useEffect( async() => {
        const API_KEY = config.API_KEY;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city.cityname}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        setTemp(data.main.temp);
        setMinTemp(data.main.temp_min);
        setMaxTemp(data.main.temp_max);
        setDesc(data.weather[0].main);
        setIcon(data.weather[0].icon);
    }, []);

    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    // icon, temp, high temp, low temp, desc

    return ( 
        <div onClick={() => {history.push(`/my_city_details/${city.cityname}`)}} className="my-city-card">
            <div className="card-title">{city.cityname}</div>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <img src={iconUrl} className="weather-img"></img>
            <div className="temp">{temp}&deg;</div>
            <div className="desc">{desc}</div>
            <div className="min-temp-block">
                <FontAwesomeIcon className="caret-down" icon={faCaretDown} size="2x"></FontAwesomeIcon>
                <div className="min-temp">{Math.round(minTemp)}&deg;</div>
                <div className="min-temp-text">Min</div>
            </div>
            <div className="max-temp-block">
                <FontAwesomeIcon className="caret-up" icon={faCaretUp} size="2x"></FontAwesomeIcon>
                <div className="max-temp">{Math.round(maxTemp)}&deg;</div>
                <div className="max-temp-text">Max</div>
            </div>
            <div><Link to={`/my_city_details/${city.cityname}`}>View</Link></div>
            <button onClick={() => handleDelete(city.id)}>del</button>
        </div>
    );
}
 
export default MyCityCard;

MyCityCard.propTypes = {
    city: PropTypes.shape({
        cityname: PropTypes.string,
        id: PropTypes.string
    }),
    handleDelete: PropTypes.func
}

/*
open weather icons: http://openweathermap.org/img/wn/10d@2x.png
*/

/*
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/