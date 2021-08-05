import React from "react";
import classes from './NavMenu.module.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Profile from "../profile/Profile";


export default function NavMenu() {

    return (
        <Router>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <Link to={'/profile'}>Profile</Link>
                </div>
                <div className={classes.item}>
                    <Link to={'/dialogs'}>Messages</Link>
                </div>
                <div className={classes.item}>
                    <a>News</a>
                </div>
                <div className={classes.item}>
                    <a>Music</a>
                </div>
                <div className={classes.item}>
                    <a>Settings</a>
                </div>

            </nav>
        </Router>
    );

}