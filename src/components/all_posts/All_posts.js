import {useEffect, useState} from "react";
import User from "../users/user/User";
import AllPost from "./all_post/AllPost";
import {Route, Switch} from "react-router-dom";
import UserDetails from "../user-details/userDetails";
import Comments from "../comments/Comments";

export default function All_posts(){

    let [allPosts, setAllPosts] = useState([])

     useEffect(() =>{
         fetch('https://jsonplaceholder.typicode.com/posts')
                .then(value => value.json())
                .then(value => {
                    setAllPosts([...value]);
                })
        }, [])

    return(
            <div>

                {
                    allPosts.map(value => <AllPost key={value.id} item={value}/>)

                }

                <Switch>
                    <Route exact path={'/posts/:id/comments'} component={Comments}/>
                </Switch>
            </div>
    );
}