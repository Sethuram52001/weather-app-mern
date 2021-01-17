import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
     );
  }
}
 
export default App;
