import React from "react";
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './components/posts/Posts';
import Nav from "./components/nav/Nav";
import AddPost from "./components/add-post/AddPost";
import TopBar from "./components/top-bar/TopBar";

// App Component
const App = () =>{

  useEffect(()=>{
    console.log('App init');
    return ()=> console.log('App Unmounted')
  },[])

  return (
  <div className="App">
      <TopBar/>
      <Nav/>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/addpost" component={AddPost} />
        </Switch>
      </div>
  </div>
  );
}

export default App;