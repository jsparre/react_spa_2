import React, {Component} from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import Gallery from "./Gallery";
import Commission from "./Commission";
import Tos from "./Tos";
import Contact from "./Contact";

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Julias Website</h1>
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink to="/gallery">Gallery</NavLink></li>
                        <li><NavLink to="/commission">Commission Info</NavLink></li>
                        <li><NavLink to="/tos">Terms of Service</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/commission" component={Commission} />
                        <Route path="/tos" component={Tos} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;
