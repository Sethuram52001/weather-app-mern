import React, { Component } from 'react';
import axios from "axios";
import MyCityCard from "../MyCityCard/MyCityCard";
import "./MyCities.scss";
import { connect } from "react-redux";
import { getCities } from '../../redux/actions/cityActions';
import { getForecast } from "../../redux/actions/forecastActions";
import { getWeather } from '../../redux/actions/weatherActions';

class MyCities extends Component {
    
    componentDidMount() {
        this.props.dispatch(getCities());
        this.props.dispatch(getForecast());
        this.props.dispatch(getWeather());
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
        const { cities } = this.props;
        const listItems = cities.map((city) =>
            <MyCityCard key={city.id} city={city} handleDelete={this.deleteCard} className="my-city-card" />
        );

        return ( 
            <div>
                {listItems}
            </div>
         );
    }
}
 
function mapStateToProps(state) {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(MyCities);