
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/userDetails";


export default function App() {

  return (
  <Router>
    <div>

      <Link to={'/users'}>user page</Link>

      <Switch>
        <Route  path={'/users'} component={Users}/>
        {/*<Route path={'/users/:id'} component={UserDetails}/>*/}
      </Switch>


    </div>
  </Router>

);
}

