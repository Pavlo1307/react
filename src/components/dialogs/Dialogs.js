import React, {useEffect, useState} from "react";
import classes from "./Dialogs.module.css"
import {getMessages, getUsers} from "../servises/API";
import User from "./user/User";
import Messages from "./messages/Messages";
import {Route} from "react-router-dom";


export default function Dialogs() {


    let [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    })
    let userid={users}
    console.log(userid)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <h2>Users</h2>
                    {
                        users.map((value => <User key={value.id} user={value}/>))
                    }
            </div>
            <div className={classes.messages}>
                <h2>Messages</h2>
                <Route path={'/users'} render={() => <Messages />}/>

            </div>
        </div>
    );
}