import {useEffect, useState} from "react";
import {getUserPosts} from "../../servises/API";
import UserPosts from "./userPosts/UserPosts";
import "./User.css"

export default function User({user}){

    let [userPosts,setUserPosts] = useState([]);
    let [toggle,setToggle] = useState();

    function showUserPosts (id) {
            getUserPosts(id).then(value => setUserPosts(value.data))
            setToggle(!toggle)
    }


    return(
        <div class="bg-warning text-white">
            <div className={'center'}>
            <div>{user.id} - {user.name}</div>
            <div className={'button-style'}><button onClick={()=>showUserPosts(user.id)}>show posts</button></div>

            </div>
        <hr/>
            {toggle && <UserPosts userPosts={userPosts}/>}


        </div>
    );
}
