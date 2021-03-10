import React from 'react';
import PropTypes from "prop-types";
import { LineChart, XAxis, Tooltip, YAxis, Legend,  CartesianGrid, Line, ResponsiveContainer } from "recharts";

const Chart = ({forecastInfo,handleClick}) => {
    const data = forecastInfo;
    
    return ( 
        <div style={{ width: "100%", height: 250 }}>
            <h3 className="title">Forecast</h3>
            <button onClick={() => handleClick()}>toggle</button>
            <ResponsiveContainer>
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid fill="white" strokeDasharray="3 3" />
                    <XAxis dataKey="dt_txt" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line name="temp" type="monotone" dataKey="main.temp" stroke="#8884d8" />
                    <Line name="humidity" type="monotone" dataKey="main.humidity" stroke="#82ca9d" />
                    <Line name="wind" type="monotone" dataKey="wind.speed" stroke="#ff0000" />
                </LineChart>  
            </ResponsiveContainer>
        </div>
     );
}
 
export default Chart;

Chart.propTypes = {
    forecastInfo: PropTypes.array,
    handleClick: PropTypes.func
}