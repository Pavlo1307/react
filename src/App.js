import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import {getUsers} from "./components/servises/API";

export default function App() {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(value => setUsers(value.data))
    },[])


  return (
      <Router>
        <div>
            <Link to={'/users'}></Link>
        </div>
      </Router>
        );
}


