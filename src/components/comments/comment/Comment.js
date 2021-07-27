import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import CommentsDetails from "./commentDetails/CommentDetails";

export default function Comment({comment, url}) {
    return(
        <div>
            {comment.id} - {comment.email} <Link to={url+'/'+comment.id}>Show details</Link>

            <Switch>
                <Route path={url+'/'+comment.id} render={()=><CommentsDetails id={comment.id}/>}/>

            </Switch>
        </div>
    );
}
