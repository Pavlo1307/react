import {useEffect, useState} from "react";

export default function Users(){
    let [user,setUsers]  = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersfromServer => {
                setUsers(usersfromServer);
            });
    },[]);

    return(
        <div>
                {
                    user.map( user => <div>{user.id} - {user.name}</div>)
                }
        </div>
    );
}