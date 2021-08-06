import classes from "./User.module.css";
import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMessages} from "../../servises/API";


export default function User({user}) {
    return(
        <div className={classes.user}>
             <Link to={'dialogs/users/'+user.id}>{user.name}</Link>
        </div>
    );
}