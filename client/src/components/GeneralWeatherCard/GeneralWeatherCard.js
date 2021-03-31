import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./GeneralWeatherCard.scss";

const GeneralWeatherCard = ({ weatherInfo, icon }) => {
    return ( 
        <div>
            <div className="general-weather-card">
                {/* <FontAwesomeIcon className="g-weather-box" size="8x" icon={icon} /> */}
                <div className="g-weather-box">
                    <div className="text-temp">{weatherInfo.temp}&deg;</div> 
                    <div className="text-desc">{weatherInfo.description}</div> 
                </div>
          </div>
        </div>
     );
}
 
export default GeneralWeatherCard;
