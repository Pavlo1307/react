import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import User from "./user/User";


export default function Users() {

    const dispatch = useDispatch();

    const users =  useSelector(({users}) =>users);

    const fetchUsers = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();

        dispatch({
            type:'ADD_USERS',
            payload: json,
        })
    }

    useEffect(() =>{
        fetchUsers()
    },[])

    return(
        <div>

            {
                users.map((value) => <User key={value.id} item={value}  />)
            }

        </div>
    );

}