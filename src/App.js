import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Radio from "./components/Radio";
import Scripts from "./components/Scripts";
import TPT from "./components/TPT";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route exact path="/Radio" render={props => <Radio {...props} />} />
        <Route exact path="/TPT" render={props => <TPT {...props} />} />
        <Route exact path="/scripts" render={props => <Scripts {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
