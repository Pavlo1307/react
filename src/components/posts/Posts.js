import Post from "./post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../servises/API";

export default function Posts({match:{url}}) {

    let [posts, setPosts] = useState([])

    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])

    return(
        <div>
            <h2>Posts</h2>
            {
                posts.map((value)=><Post
                    key={value.id}
                    post={value}
                    url={url}
                />)
            }
        </div>
    );
}
