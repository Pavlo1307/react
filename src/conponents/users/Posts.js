import {useEffect, useState} from "react";
import User from "./User";

export default function Posts({postId}){

    let [posts,setPosts] = useState([])

    let [flag,setFlag] = useState(true)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                setPosts(posts);
            });
    },[]);


     let filterArr = posts.filter(value => value.userId === postId)
function click ()  {

    setFlag(!flag)
}




    return (
        <div>
            {
                   !flag && filterArr.map( post => <div> {post.userId} - {post.title}</div>)

            }

           <button onClick={click}>Clik</button>

        </div>
    )


}