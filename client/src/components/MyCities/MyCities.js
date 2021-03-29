import React, { Component } from 'react';
import axios from "axios";
import MyCityCard from "../MyCityCard/MyCityCard";
import "./MyCities.scss";
import AddCityCard from '../AddCityCard/AddCityCard';

class MyCities extends Component {
    state = { 
        cities: []
    }

    componentDidMount() {
        axios.get(`/cities`)
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
        axios.delete(`/cities/${id}`);
    }
    
    render() { 
        const { cities } = this.state;
        const listItems = cities.map((city) =>
            <MyCityCard id={city.id} city={city} handleDelete={this.deleteCard} className="my-city-card" />
        );

        return ( 
            <div>
                {listItems}
                <AddCityCard />
            </div>
         );
    }
}
 
export default MyCities;