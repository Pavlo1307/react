import {useEffect, useState} from "react";
import {getCommentsDetails} from "../../../servises/API";

export default function CommentsDetails({id}) {

    let [commentDetails, setCommentsDetails] = useState(null);

    useEffect(()=>{
        getCommentsDetails(id).then(value => setCommentsDetails(value.data))

    },[id])


    return(
        <>
            {
                commentDetails && <div> {commentDetails.id} {commentDetails.body}</div>
            }

        </>
    );
}
