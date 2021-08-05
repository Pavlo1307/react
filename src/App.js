import React from "react";
import './App.css'
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/setiings/Settings";


export default function App() {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <NavMenu/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <Dialogs />}/>
                    <Route path={'/profile'} render={() => <Profile/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>
                </div>

            </div>
        </Router>
    );
}


