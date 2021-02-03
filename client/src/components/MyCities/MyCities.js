import React, { Component } from 'react';
import axios from "axios";
import MyCityCard from "../MyCityCard/MyCityCard";
import "./MyCities.scss";

class MyCities extends Component {
    state = { 
        cities: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/cities`)
            .then(res => {
                console.log(res.data)
                const resObj = res.data;
                const cities = [];
                resObj.map((value) => {
                    console.log(value.cityname)
                    cities.push(value.cityname)
                });
                console.log(cities);
                this.setState({ cities });
            })
            .catch(err => console.log(err));
    }
    
    render() { 
        const { cities } = this.state;
        const listItems = cities.map((city) =>
            <MyCityCard name={city.toString()} className="my-city-card" />
        );

        return ( 
            <div>
                <h1>My Cities</h1>
                {listItems}
            </div>
         );
    }
}
 
export default MyCities;