import {useEffect, useState} from "react";
import {getPostsDetails} from "../../../servises/API";

export default function PostDetails({id}) {

    let [postDetails, setPostDetails] = useState(null);
    console.log(id);

    useEffect(()=>{
        getPostsDetails(id).then(value => setPostDetails(value.data))
        console.log(postDetails);
    },[id])


    return(
        <div>
            {
                postDetails  && <div> {postDetails.id} {postDetails.body}</div>
            }
        </div>
    );
}
