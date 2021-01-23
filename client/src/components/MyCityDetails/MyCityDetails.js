import React, { Component } from 'react';

const MyCityDetails = (props) => {

    const city = props.match.params.id;
    console.log("my city details of: "+city)
    return ( 
        <div>
            <h1>Hello there</h1>
            <div></div>
        </div>
     );
}
 
export default MyCityDetails;