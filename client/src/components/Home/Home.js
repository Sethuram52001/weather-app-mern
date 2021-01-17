import React, { Component } from 'react';
import config from "../../config/config.json";

class Home extends Component {
    state = {
        searchValue: ""
    }
    
    getWeather = async(e) => {
        e.preventDefault();
        console.log(this.state.searchValue);
        const API_KEY = config.API_KEY;
        const searchValue = this.state.searchValue;
        const weather = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${searchValue}&APPID=${API_KEY}&units=metric`;
        const api_call = await fetch(weather);
        const data = await api_call.json();
        console.log(data);
        const api_call2 = await fetch(forecast);
        const data2 = await api_call2.json();
        console.log(data2);
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    render() { 
        return ( 
            <div>
                <h1>Home</h1>
                <form onSubmit={this.getWeather}>   
                    <input type="search" onChange={this.handleChange} value={this.state.searchValue} placeholder="City..."></input>
                </form>
            </div>
         );
    }
}
 
export default Home;