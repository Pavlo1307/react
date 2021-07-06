import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Post from "../posts/post/Post";
import Comment from "./comment/Coment";

export default function Comments(props){

    let {id} = useParams();
    let [comments, setComments] = useState([]);

    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
            .then(value => value.json())
            .then(value => {

                setComments([...value])
            })
    }, [id])

    return (
        <div>

            {
                comments.map(value => <Comment key={value.id} item={value}/>)

            }


        </div>
    );
}