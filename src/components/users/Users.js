import User from "./user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../servises/API";

export default function Users({match:{url}}) {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div>
            <h2> Users</h2>
            {
                users.map((value)=><User
                    key={value.id}
                    user={value}
                    url={url}
                />)
            }
        </div>
    );
}
