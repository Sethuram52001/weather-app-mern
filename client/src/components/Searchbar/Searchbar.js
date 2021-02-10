import React from 'react';
import SearchBar from "material-ui-search-bar";
import "./Searchbar.scss";

const Searchbar = (props) => {
    return (
        <form onSubmit={ props.handleSubmit }>
            <SearchBar
                name="city"
                placeholder="Enter city"
                className="searchbar"
            />
        </form>
    );
}
 
export default Searchbar;