import React from "react";
import classes from "./Posts.module.css"
import Post from "./post/Post";

export default function Posts(){
 return(
    <div>
        <div>
            Post
            <div>
                new post
            </div>
        </div>
        <div className='posts'>
            <textarea name="" id="" cols="20" rows="5"></textarea>
            <button> add post</button>
            <Post value="Hi its me" like = '10'/>
            <Post value="You are beautiful" like = '15'/>
        </div>
    </div>
 );
}
