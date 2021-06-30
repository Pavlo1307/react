import {useState} from "react";
import {getUsersPost} from "../../servises/API";

export default function User({item}){


    const [userPosts, setUserPosts] = useState([]);
    const [toggle, setToggle] = useState(false);

     function click() {
         getUsersPost(item.id).then(value => setUserPosts(value.data));
         setToggle(!toggle);
    }


    return(
        <div>
            {item.id} - {item.name} - <button onClick={click}> click me</button>


            {
                toggle && userPosts.map(value => <div>{value.userId}--{value.title} </div>)
            }

        </div>
    );
}