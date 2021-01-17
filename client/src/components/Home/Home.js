import React, { Component } from 'react';
import config from "../../config/config.json";

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>Home</h1>
                {config.API_KEY}
            </div>
         );
    }
}
 
export default Home;