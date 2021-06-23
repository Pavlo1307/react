import logo from './logo.svg';
import './App.css';
import Users from "./conponents/users/Users";
import Menu from "./conponents/menu/Menu";
export default function App() {
  return (
    <div>
        <Menu
            pages={['user page', 'comments page']}
            classes={['xxx', 'yyy']}
            />
        <Users/>
        <Menu pages={['about', 'team']}/>
    </div>
  );
}



