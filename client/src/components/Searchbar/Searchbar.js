import React, { Component } from 'react';
import SearchBar from "material-ui-search-bar";

const Searchbar = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <SearchBar
                name="city"
            />
        </form>
    );
}
 
export default Searchbar;