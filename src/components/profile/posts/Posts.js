import React from "react";
import classes from "./Posts.module.css"

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
            <Posts/>

        </div>
    </div>
 );
}
