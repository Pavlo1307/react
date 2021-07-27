import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import {getComments, getPosts, getUsers} from "./components/servises/API";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {

  return (
      <Router>
        <div>
            <Link to={'/users'}>show users</Link>
            <br/>
            <Link to={'/comments'}>show comments</Link>
            <br/>
            <Link to={'/posts'}>show posts</Link>


            <Switch>
                <Route path={'/users'} render={(props)=><Users {...props} />}/>
                <Route path={'/comments'} render={(props)=><Comments {...props}/>}/>
                <Route path={'/posts'} render={(props)=><Posts {...props}/> }/>
            </Switch>
        </div>
      </Router>
        );
}


