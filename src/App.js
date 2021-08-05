import React from "react";
import './App.css'
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";


export default function App() {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <NavMenu/>
                <div className='app-wrapper-content'>


                        <Route path={'/dialogs'} component={Dialogs}/>
                        <Route path={'/profile'} component={Profile}/>


                </div>

            </div>
        </Router>
    );
}


