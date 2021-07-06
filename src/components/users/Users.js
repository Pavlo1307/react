import User from "./user/User";
import {useEffect, useState} from "react";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/userDetails";
import Posts from "../posts/Posts";
import Post from "../posts/post/Post";

export default function Users(){

    let [users, setUsers] = useState([])

    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers([...value]);
            })
    }, [])

    return(
        <div>

            {
                users.map(value => <User key={value.id} item={value}/>)

            }


            <Switch>


                <Route exact path={'/users/:id'} component={UserDetails}/>

                <Route path={'/users/:id/posts'} component={Posts}/>


            </Switch>

        </div>
    );
}