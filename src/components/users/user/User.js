import {useEffect, useState} from "react";
import {getPost, getUsersPost} from "../../servises/API";
import {logDOM} from "@testing-library/react";

export default function User({user}){

    let [usersPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);
    let [post, setPost] = useState([])

    function showPosts() {
            getUsersPost(user.id).then(userPost => setUserPosts(userPost.data));
            setToggle(!toggle)
    }


    let showInfo = (id)=>{
        getPost(id).then(post=>setPost(post.data))
    }


    return(
        <div>
            {user.id} - {user.name} - <button onClick={showPosts}>Show posts</button>
            <hr/>
            <hr/>
            {
                toggle && usersPosts.map(usersPost =>
                        <div>
                            {usersPost.id}--{usersPost.title} -
                            <button onClick={()=>showInfo(usersPost.id)}>show info</button>
                            <hr/>
                            {console.log(usersPost.id)}
                            {post.title}
                            <br/>
                            {post.body}
                            <br/>

                        </div>

                )

            }

        </div>
    );
}

