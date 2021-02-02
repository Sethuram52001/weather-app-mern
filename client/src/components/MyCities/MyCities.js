import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import MyCityCard from "../MyCityCard/MyCityCard";

class MyCities extends Component {
    state = { 
        cities: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/cities`)
            .then(res => {
                // let cities = res.map((value) => {
                //     value.cityname
                // })
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
            <li key={city.toString()}>
                <MyCityCard name={city.toString()} />
                {/* <Link to={`/my_city_details/${city}`}>{city}</Link> */}
            </li>
        );

        return ( 
            <div>
                <h1>My Cities</h1>
                <ul>{listItems}</ul>
            </div>
         );
    }
}
 
export default MyCities;