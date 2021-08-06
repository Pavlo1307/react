import React, {useEffect, useState} from "react";
import {getMessages} from "../../servises/API";
import Message from "./message/Message";
import User from "../user/User";
import classes from"./Messages.module.css"

export default function Messages(props) {
    const {match: {params: {id}}} = props;

    let [messages, setMessages] = useState([]);

    useEffect(()=>{
       getMessages(id).then(value => setMessages(value.data))
    },[id])

    return(
        <div className={classes.messages}>
            <div className={classes.item}>{messages.name} </div>
            <div className={classes.item}>{messages.username}</div>
            <div className={classes.item}>{messages.email}</div>
            <div className={classes.item}>{messages.phone}</div>

        </div>
    );
}