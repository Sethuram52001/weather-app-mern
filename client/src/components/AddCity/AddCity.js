import React, { Component } from 'react';
import axios from "axios";
import Searchbar from '../Searchbar/Searchbar';

class AddCity extends Component {
    state = {
        searchValue: ""
    }

    handleChange = (e) => {
        this.setState({ searchValue: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const city = {
            cityname: e.target.elements.city.value
        }
        axios.post('http://localhost:5000/cities/add', city)
          .then(res => console.log(res.data))
    }

    render() { 
        return (
            <Searchbar handleSubmit={this.handleSubmit} />
        );
    }
}
 
export default AddCity;