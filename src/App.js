import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {

  return (
      <Router>
        <div>
            <div>
                <Link to={'/users'}>Show users</Link>
                <Link to={'/comments'}>Show comments</Link>
                <Link to={'/posts'}>Show posts</Link>
            </div>

            <Switch>
                <Route path={'/users'} render={(props)=><Users {...props} />}/>
                <Route path={'/comments'} render={(props)=><Comments {...props}/>}/>
                <Route path={'/posts'} render={(props)=><Posts {...props}/> }/>
            </Switch>
        </div>
      </Router>
        );
}


