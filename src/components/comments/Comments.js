import Comment from "./comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../servises/API";

export default function Comments({match:{url}}) {
    console.log(url);

    let [comments, setComments] = useState([])

    useEffect(()=>{
        getComments().then(value => setComments(value.data))
    },[])

    return(
        <div>
            <h2>Comments</h2>
            {
                comments.map((value)=><Comment
                    key={comments.id}
                    comment={value}
                    url={url}
                />)
            }
        </div>
    );
}
