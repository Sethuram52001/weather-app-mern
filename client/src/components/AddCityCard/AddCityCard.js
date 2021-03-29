import React from 'react';
import {Link, withRouter} from "react-router-dom";

const AddCityCard = () => {
    return ( 
        <div style={{background: "white"}}>
            <Link to="/add_city">click here</Link>
        </div>
     );
}
 
export default AddCityCard;