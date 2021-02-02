import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import config from "../../config/config.json";
import { Link } from "react-router-dom";

const MyCityCard = ({ name }) => {
    const [temp, setTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [desc, setDesc] = useState("");

    useEffect( async() => {
        const API_KEY = config.API_KEY;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        console.log(data);
        setTemp(data.main.temp);
        setMinTemp(data.main.temp_min);
        setMaxTemp(data.main.temp_max);
        setDesc(data.weather[0].main)
    }, []);

    // getWeather = () => {
    //     const API_KEY = config.API_KEY;
    //     const weather = `https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${API_KEY}&units=metric`;
    // }
    console.log(name)
    // icon, temp, high temp, low temp, desc
    return ( 
        <div className="card">
            <p>{temp}</p>
            <p>{minTemp}</p>
            <p>{maxTemp}</p>
            <p>{desc}</p>
            <p><Link to={`/my_city_details/${name}`}>{name}</Link></p>
        </div>
    );
}
 
export default MyCityCard;

MyCityCard.propTypes = {
    name: PropTypes.string
}

