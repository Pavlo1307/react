import React from "react";
import './App.css'
import Header from "./components/header/Header";
import NavMenu from "./components/navMenu/NavMenu";
import Profile from "./components/profile/Profile";

export default function App() {
  return (
      <div className='app-wrapper'>
          <Header/>
          <NavMenu/>
          <Profile/>
      </div>
        );
}


