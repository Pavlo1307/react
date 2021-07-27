import {useState} from "react";
import {getUserDetails} from "../../servises/API";
import UsersDetails from "./userDetails/UserDetails";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";


export default function User({user, url}){

    return(
        <div>

            {user.id}  {user.name} - <Link to={url + '/'+ user.id}>user details</Link>
            <Switch>
                <Route path={url + '/'+ user.id} render={() => <UsersDetails id={user.id}/>}/>

            </Switch>
        </div>
    );
}