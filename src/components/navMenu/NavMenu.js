import React from "react";
import classes from './NavMenu.module.css'
import {BrowserRouter as Router, Link, Route, Switch, NavLink} from "react-router-dom";
import Profile from "../profile/Profile";



export default function NavMenu() {

    return (
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to={'/profile'} className={classes.activeLink}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/dialogs'} className={classes.activeLink}>Dialogs</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/news'} >News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'music'}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to={'/settings'}>Settings</NavLink>
                </div>

            </nav>
    );

}