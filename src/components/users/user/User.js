import {useEffect, useState} from "react";
import {getUsersPost} from "../../servises/API";

export default function User({user}){

    let [usersPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);

    function showPosts() {
            getUsersPost(user.id).then(userPost => setUserPosts(userPost.data));
            setToggle(!toggle)
    }

    function showInfo() {
        getUsersPost(user.id).then(userPost => setUserPosts(userPost.data));

        usersPosts.map(userPost=>
            <div>
                <p>dsdsd</p>
                {userPost.title}
                <br/>
                {userPost.body}
                <br/>
            </div>
        )
    }

    // const showInfo = ()=>{
    //     usersPosts.map(userPost=>
    //             <div>
    //                 <p>dsdsd</p>
    //                 {userPost.title}
    //                 <br/>
    //                 {userPost.body}
    //                 <br/>
    //             </div>
    //         )
    //
    // }




    return(
        <div>
            {user.id} - {user.name} - <button onClick={showPosts}>Show posts</button>
            <hr/>
            <hr/>
            {
                toggle && usersPosts.map(usersPost =>
                        <div>
                            {usersPost.id}--{usersPost.title} -
                            <button onClick={showInfo}>show info</button>
                            <hr/>
                        </div>

                )
            }
        </div>
    );
}

