import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";


export default function Posts() {

    const dispatch =useDispatch();

    const posts =  useSelector(({posts}) =>posts);

    const fetchPosts = async () =>{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const json = await response.json();

        dispatch({
            type:'ADD_POSTS',
            payload: json,
        })
    }

    useEffect(() =>{
        fetchPosts()
    },[])

return(
    <div>
        <ul>
            {posts.map(post=>(
                <li>key={post.id} --- {post.title}</li>
            ))}
        </ul>
    </div>
);

}