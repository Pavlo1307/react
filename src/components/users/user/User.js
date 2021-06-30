import {useState} from "react";
import {getUsersPost} from "../../servises/API";

export default function User({item}){


    const [userPosts, setUserPosts] = useState([]);

    function click() {
        getUsersPost(item.id).then(value => setUserPosts(value.data));
    }


    return(
        <div>
            {item.id} - {item.name} - <button onClick={click}> clisk me</button>


            {
                userPosts.map(value => <div>{value.userId}--{value.title} </div>)
            }

        </div>
    );
}