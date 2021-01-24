import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MyCities extends Component {
    state = { 
        cities: ["Madurai","Chennai","Delhi"]
    }
    
    render() { 
        const { cities } = this.state;
        const listItems = cities.map((city) =>
            <li key={city.toString()}>
                <Link to={`/my_city_details/${city}`}>{city}</Link>
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