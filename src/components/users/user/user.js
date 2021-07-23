import {useEffect, useState} from "react";
import {getUserPosts} from "../../servises/API";
import UserPosts from "./userPosts/UserPosts";

export default function User({user}){

    let [userPosts,setUserPosts] = useState([]);
    let [toggle,setToggle] = useState();

    function showUserPosts (id) {
            getUserPosts(id).then(value => setUserPosts(value.data))
            setToggle(!toggle)
    }


    return(
        <div>
            {user.id} - {user.name} <button onClick={()=>showUserPosts(user.id)}>show posts</button>
            <hr/>  <hr/>
            {toggle && <UserPosts userPosts={userPosts}/>}

        </div>
    );
}
