import {getPostComment} from "../../../../../servises/API";
import {useState} from "react";
import PostComments from "./postComents/PostComments";

export default function PostDetail({postDetail}){

    let [postComments, setPostComments] = useState([])


    function showComment(id) {
        getPostComment(id).then(value => setPostComments(value.data))

    }
    return(
        <div>
            {postDetail.body} <button onClick={()=>showComment(postDetail.id)}>Show Comment</button>
            <PostComments postComments={postComments}/>
        </div>
    );
}