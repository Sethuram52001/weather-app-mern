import React, { Component } from 'react';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import MyCities from './components/MyCities/MyCities';
import MyCityDetails from './components/MyCityDetails/MyCityDetails';
import AppNavbar from './components/AppNavbar/AppNavbar';
import AddCity from './components/AddCity/AddCity';
import Login from './components/Login/Login';

class App extends Component {
  state = {}
  
  componentDidMount() {
    document.body.classList.add("root");
  }

  render() { 
    return ( 
      <div>
      <Router>
        <AppNavbar />
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/my_cities" component={MyCities} exact></Route> 
          <Route path="/my_city_details/:id" component={MyCityDetails}></Route>
          <Route path="/add_city" component={AddCity}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}
 
export default App;
