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
        //const city = this.state.searchValue;
        this.setState({ city });
        const city = {
            cityname: this.state.searchValue
        }
        console.log(city);
    // axios.post('http://localhost:5000/users/add', user)
    //   .then(res => console.log(res.data));
        axios.post('http://localhost:5000/cities/add', city)
            .then(res => console.log(res.data))
    }

    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="search" onChange={this.handleChange} value={this.state.inputValue}></input>
            </form>
        );
    }
}
 
export default AddCity;