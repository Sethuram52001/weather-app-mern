import React, { Component } from 'react';
import axios from "axios";
import MyCityCard from "../MyCityCard/MyCityCard";
import "./MyCities.scss";
import { connect } from "react-redux";
import { getCities } from '../../redux/actions/cityActions';
import AddCityCard from '../AddCityCard/AddCityCard';

class MyCities extends Component {
    
    componentDidMount() {
        this.props.dispatch(getCities());
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
                <AddCityCard />
            </div>
         );
    }
}
 
function mapStateToProps(state) {
    return {
        cities: state.cities.cities
    }
}

export default connect(mapStateToProps)(MyCities);