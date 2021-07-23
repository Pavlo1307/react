import {useEffect, useState} from "react";
import {getUsers} from "../servises/API";
import User from "./user/user";
import './user/User.css'

export default function Users(){

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div className={'users-wrap'}>
            {
                users.map((user)=><User key={user.id} user={user}/>)
            }
        </div>



    );
}