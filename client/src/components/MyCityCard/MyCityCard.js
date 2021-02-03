import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../config/config.json";
import { Link } from "react-router-dom";
import "./MyCityCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from '@fortawesome/free-solid-svg-icons';

const MyCityCard = ({ name }) => {
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");
    //let icon = null;

    // if (desc === 'Thunderstorm') {
    //     icon = faBolt;
    // } else if (desc === 'Drizzle') {
    //     icon = faCloudRain;
    // } else if (desc === 'Rain') {
    //     icon = faCloudShowersHeavy;
    // } else if (desc === 'Snow') {
    //     icon = faSnowflake;
    // } else if (desc === 'Clear') {
    //     icon = faSun;
    // } else if (desc === 'Clouds') {
    //     icon = faCloud;
    // } else {
    //     icon = faSmog;
    // }

    useEffect( async() => {
        const API_KEY = config.API_KEY;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        console.log(data.weather[0].icon);
        setTemp(data.main.temp);
        setMinTemp(data.main.temp_min);
        setMaxTemp(data.main.temp_max);
        setDesc(data.weather[0].main);
        setIcon(data.weather[0].icon);
    }, []);

    const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;
    // icon, temp, high temp, low temp, desc
    return ( 
        <div className="my-city-card">
            <p>{name}</p>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <img src={iconUrl}></img>
            <p>{temp}</p>
            <p>{desc}</p>
            <p>{minTemp} Min</p>
            <p>{maxTemp} Max</p>
            <p>{desc}</p>
            <p><Link to={`/my_city_details/${name}`}>View</Link></p>
        </div>
    );
}
 
export default MyCityCard;

MyCityCard.propTypes = {
    name: PropTypes.string
}

/*
open weather icons: http://openweathermap.org/img/wn/10d@2x.png
*/