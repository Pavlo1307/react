import {useEffect, useState} from "react";
import {getUsers} from "./components/servises/API";
import Users from "./components/users/Users";


export default function App() {

    let [users, setUsers] = useState([]);


    useEffect(()=>{
        getUsers().then(value => setUsers(value.data));

    },[])
  return (
      <div>
          <Users users={users}/>
      </div>
        );
}


