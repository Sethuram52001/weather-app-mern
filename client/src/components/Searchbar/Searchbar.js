import React, { Component } from 'react';

const Searchbar = (props) => {
    return ( 
        <div>
            <form onSubmit={props.handleGetWeather}>
                <input type="search" name="city" placeholder="City..."></input>
            </form>
        </div>
     );
}
 
export default Searchbar;