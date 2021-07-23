import {useState} from "react";
import {getPostsDetails} from "../../../../servises/API";
import PostDetail from "./postDetail/PostDetail";

export default function UserPost({userPost}){

    let [postDetail, setPostDetail] = useState([])
    let [toggle, setToggle] = useState(false)

    function showInfo(id){
        getPostsDetails(id).then(value => setPostDetail(value.data))
        setToggle(!toggle)
    }

    console.log(postDetail)
    return(
        <div>
            {userPost.id}-{userPost.title} - <button onClick={()=>showInfo(userPost.id)}>Show info</button>

            {toggle && <PostDetail postDetail={postDetail}/>}

        </div>
    );
}