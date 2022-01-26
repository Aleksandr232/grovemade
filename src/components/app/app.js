import React, {Component} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "../main";

import './app.css';


export default class App extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Routes>
                    <Route exact path='/' element={<Main/>}></Route>
                    </Routes>
                </div>
            </Router>
        )
    }
} 