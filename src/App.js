import Users from './components/users/Users'
import {BrowserRouter as Router, Link,Switch,Route} from 'react-router-dom';

export default function App() {
  return (
      <Router>
        <div>

          <Link to={'/users'}>user page</Link>
        <Switch>
          <Route path={'/user'} component={Users}/>

        </Switch>
        </div>
      </Router>
  );
}


