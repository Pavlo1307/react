
import {useEffect, useState} from 'react';
import {getUser, getUsers} from "./components/services/APi";
import Users from "./components/users/Users";

export default function App(){

    let [user, setUser] = useState(null);
    let [users, setUsers] = useState([]);

    let appFn =(id) =>{
        getUser(id).then(value => setUser(value.data));

    };




    useEffect(()=>{
        getUsers().then(value => setUsers(value.data));

    },[])


    return(
        <div>

            <Users items={users} appFn={appFn}/>
            <hr/>
            {
                 user && <div>{user.username}</div>
            }
        </div>
    );
}



