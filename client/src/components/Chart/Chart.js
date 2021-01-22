import React, { Component } from 'react';
import { LineChart, XAxis, Tooltip, YAxis, Legend,  CartesianGrid, Line } from "recharts";

const Chart = ({forecastInfo}) => {

    const data = forecastInfo;
    console.log(forecastInfo);
    
    return ( 
        <div>
            <LineChart width={1000} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dt_txt" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
                <Line type="monotone" dataKey="main.humidity" stroke="#82ca9d" />
                <Line type="monotone" dataKey="wind.speed" stroke="#ff0000" />
            </LineChart>        
        </div>
     );
}
 
export default Chart;