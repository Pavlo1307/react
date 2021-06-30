import {useState} from "react";
import {getPostsComents} from "../../servises/API";

export default function Post({item}){


    const [postsComents, setPostsComents] = useState([]);

    function click() {
        getPostsComents(item.id).then(value => setPostsComents(value.data));
    }

    return(
        <div>


            {item.id} - {item.email} - <button onClick={click}>Comments</button>

            {
                postsComents.map(value => <div>{value.id}--{value.email} </div>)
            }





        </div>
    );
}