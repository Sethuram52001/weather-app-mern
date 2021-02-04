import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../config/config.json";
import { Link } from "react-router-dom";
import "./MyCityCard.scss";

const MyCityCard = ({ city, handleDelete }) => {
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [desc, setDesc] = useState("");
    const [icon, setIcon] = useState("");

    useEffect( async() => {
        const API_KEY = config.API_KEY;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${city.cityname}&APPID=${API_KEY}&units=metric`;
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
            <p>{city.cityname}</p>
            {/* <FontAwesomeIcon icon={icon} /> */}
            <img src={iconUrl}></img>
            <p>{temp}</p>
            <p>{desc}</p>
            <p>{minTemp} Min</p>
            <p>{maxTemp} Max</p>
            <p>{desc}</p>
            <p><Link to={`/my_city_details/${city.cityname}`}>View</Link></p>
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