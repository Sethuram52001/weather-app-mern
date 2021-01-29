import React, { Component } from 'react';
import { LineChart, XAxis, Tooltip, YAxis, Legend,  CartesianGrid, Line, ResponsiveContainer } from "recharts";

const Chart = ({forecastInfo}) => {
    const data = forecastInfo;
    
    return ( 
        <div>
            <ResponsiveContainer width="100%">
                <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="dt_txt" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
                    <Line type="monotone" dataKey="main.humidity" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="wind.speed" stroke="#ff0000" />
                </LineChart>        
            </ResponsiveContainer>
        </div>
     );
}
 
export default Chart;