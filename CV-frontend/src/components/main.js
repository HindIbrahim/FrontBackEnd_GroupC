import React from "react";
import { Switch, Route } from "react-router-dom";


import Preview from "./Preview";
import Upload from "./Upload";
import AboutUs from "./AboutUs";
import Home from './Home';

const Main = () => (
  <Switch>
    <Route exact path="/Home" component={Home}/>
    <Route path="/aboutus" component={AboutUs} />
    <Route path="/Preview" component={Preview} />
    <Route path="/Upload" component={Upload} />
  </Switch>
);

export default Main;
