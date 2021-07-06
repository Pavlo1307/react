import {useEffect, useState} from "react";
import {Route, useParams} from "react-router-dom"
import User from "../users/user/User";
import Post from "./post/Post";

export default function Posts(props){

    let {id} = useParams();
    let [posts, setPosts] = useState([]);

    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users/'+id+'/posts')
            .then(value => value.json())
            .then(value => {

                setPosts([...value])
            })
    }, [id])

    return (
        <div>

            {
                posts.map(value => <Post key={value.id} item={value}/>)

            }


        </div>
    );
}