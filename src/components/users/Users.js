import {useEffect, useState} from "react";
import {getUsers} from "../servises/API";
import User from "./user/user";

export default function Users(){

    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div>
            {
                users.map((user)=><User key={user.id} user={user}/>)
            }
        </div>
    );
}