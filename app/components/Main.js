//* **Main** - contains the main-container div that holds the main layout and navigation.\
// This component should also be able to hold sub-components Search and Saved

import React, {Component} from 'react';
import Search from './children/Search';
import Saved from './children/Saved';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom';

class Main extends Component {

    render() {
        return (
            <Router>
                <div className="container">
                    <div className="jumbotron jumbo text-center">
                        <Link to="/">

                            <h1>
                                <i className="fa fa-newspaper-o" aria-hidden="true"></i>
                                New York Times Search</h1>
                        </Link>
                        <Link to="/saved">
                            <button type="submit" className="btn btn-default ">
                                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                                Saved Article</button>
                        </Link>
                        <Link to="/search">
                            <button type="submit" className="btn btn-default ">
                                <span className="glyphicon glyphicon-save" aria-hidden="true"></span>
                                Search</button>
                        </Link>
                    </div>

                    <div className="row">
                        <Route exact path="/" component={Search}></Route>

                        <Route path="/search" component={Search}></Route>
                    </div>
                    <div className="row">

                        <Route path="/saved" component={Saved}></Route>

                    </div>
                </div>
            </Router>
        )
    }
}
export default Main;
