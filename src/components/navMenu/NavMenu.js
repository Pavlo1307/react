import React from "react";
import classes from './NavMenu.module.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Profile from "../profile/Profile";


export default function NavMenu() {

    return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <Link to={'/profile'} className={classes.activeLink}>Profile</Link>
                </div>
                <div className={classes.item}>
                    <Link to={'/dialogs'} className={classes.activeLink}>Dialogs</Link>
                </div>
                <div className={classes.item}>
                    <Link to={'/news'} >News</Link>
                </div>
                <div className={classes.item}>
                    <Link to={'music'}>Music</Link>
                </div>
                <div className={classes.item}>
                    <Link to={'/settings'}>Settings</Link>
                </div>

            </nav>
    );

}