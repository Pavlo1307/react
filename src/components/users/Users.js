import User from "./user/User";
import {useEffect, useState} from "react";
import {getUsers, getUsersPost} from "../servises/API";
import UserDetails from "./user/userdetails/UserDetails";

export default function Users(){
    let [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data));

    },[])

    return(
        <div>
            {
                users.map((user)=><User key={user.id} user={user}/>)
            }


        </div>
    );

}