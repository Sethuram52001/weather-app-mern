import React from 'react';

const ForecastCard = (temp,month) => {
    return ( 
        <div>
            <h3>Forecast Card</h3>
            <p>{temp.toString()}</p>
        </div>
     );
}
 
export default ForecastCard;