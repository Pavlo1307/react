import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
export default function UserDetails(props){

    let {id} = useParams();
    let [user, setUser] = useState({});
    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(value => value.json())
            .then(value => {
                console.log(value)
                setUser({...value})
            })
    }, [id])
    return(
        <div>
            <br/>
            <div>{user.name}</div>
            <br/>
            <div>{user.email}</div>

            {/*{*/}
            {/*    JSON.stringify(user)*/}
            {/*}*/}
        </div>
    );
}