import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostDetails from "./postDetails/PostDetails";

export default function Post({post, url}) {

    return(
        <div>
            {post.id} - {post.title} <Link to={url+ '/' +post.id}>Show details</Link>

            <Switch>
                <Router path={url+'/'+post.id} render={()=><PostDetails id={post.id}/>}/>
            </Switch>
        </div>
    );
}
