import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import MyCities from './components/MyCities/MyCities';
import MyCityDetails from './components/MyCityDetails/MyCityDetails';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/my_cities" component={MyCities} exact></Route> 
          <Route path="/my_city_details/:id" component={MyCityDetails}></Route>
        </Switch>
      </Router>
     );
  }
}
 
export default App;
