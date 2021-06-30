
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Coments from "./components/coments/Coments";
import {useEffect, useState} from "react";
import {getComents, getUsers} from "./components/servises/API";
import {getPosts} from "./components/servises/API";

function App() {

  let [users, setUsers] = useState([]);
  let [posts, setPosts] = useState([]);
  let [coments, setComents] = useState([]);

  useEffect(()=>{
    getUsers().then(value => setUsers(value.data));

  },[])

  useEffect(()=>{
    getPosts().then(value => setPosts(value.data));

  },[])

  useEffect(()=>{
    getComents().then(value => setComents(value.data));

  },[])



  return (
  <Router>
    <div>

      <Link to={'/users'}> clik users</Link>
      <br/>
      <Link to={'/posts'}> clik posts</Link>
      <br/>
      <Link to={'/coments'}> clik coments</Link>

      <Switch>
      <Route path={'/users'} render={()=><Users items={users} />}/>
      <Route path={'/posts'} render={()=><Posts items={posts} />}/>
      <Route path={'/coments'} render={()=><Coments items={coments}/>}/>
      </Switch>


    </div>
  </Router>

);
}

export default App;
