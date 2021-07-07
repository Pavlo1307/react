import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


export default function UserPosts() {

    const dispatch = useDispatch();

    const usersPosts =  useSelector(({usersPosts}) =>usersPosts)

    const fetchUsers = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const json = await response.json();

        dispatch({
            type:'ADD_USERS',
            payload: json,
        })
    }

    return(
        <div>

        </div>
    );
}
