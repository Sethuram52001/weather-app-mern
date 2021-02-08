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
                    const city = {
                        cityname: value.cityname,
                        id: value._id
                    };
                    cities.push(city)
                });
                console.log(cities);
                this.setState({ cities });
            })
            .catch(err => console.log(err));
    }

    deleteCard = (id) => {
        console.log("delete from mycities");
        console.log(id);
        const { cities } = this.state;
        const newCities = cities.filter(city => 
            city.id !== id
        );
        this.setState({ cities: newCities });
        axios.delete(`http://localhost:5000/cities/${id}`);
    }
    
    render() { 
        const { cities } = this.state;
        const listItems = cities.map((city) =>
            <MyCityCard id={city.id} city={city} handleDelete={this.deleteCard} className="my-city-card" />
        );

        return ( 
            <div>
                {listItems}
            </div>
         );
    }
}
 
export default MyCities;