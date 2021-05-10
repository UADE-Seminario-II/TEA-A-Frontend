import React, { Component } from "react";
import { BrowserRouter as Router,Route, useHistory, Switch} from "react-router-dom";
import Home from "./components/homeScreen";
import Cartilla from "./components/cartillaScreen";
import Experiencias from "./components/experienciasScreen";

export default function Routes(){
    console.log("Redirigiendo")
    return (
        <Router history={useHistory}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Cartilla" component={Cartilla}/>
                <Route exact path="/Experiencias" component={Experiencias}/>
            </Switch>
        </Router>
    )
}