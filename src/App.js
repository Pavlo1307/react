
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/userDetails";
import Posts from "./components/posts/Posts";
import All_posts from "./components/all_posts/All_posts";
import Comments from "./components/comments/Comments";


export default function App() {

  return (
  <Router>
    <div>

      <Link to={'/users'}>user page</Link>
      <br/>
      <Link to={'/posts'}>posts</Link>

      <Switch>
        <Route  path={'/users'} component={Users}/>
        <Route  path={'/posts'} component={All_posts}/>




      </Switch>


    </div>
  </Router>

);
}

