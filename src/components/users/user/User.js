import {useEffect, useState} from "react";
import {getPost, getUsersPost} from "../../servises/API";
import UserDetails from "./userdetails/UserDetails";


export default function User({user}){
    let [usersPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);
    function showPosts(id) {
        getUsersPost(id).then(userPost => setUserPosts(userPost.data));
        setToggle(!toggle)

    }



    return(
        <div>
            {user.id} - {user.name} - <button onClick={()=>showPosts(user.id)}>Show posts</button>
            <hr/>

            {toggle && <UserDetails usersPosts={usersPosts}/>}
        </div>
    );
}

