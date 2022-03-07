import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from"./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from './components/statics/footer/Footer';
import Navbar from './components/statics/navbar/Navbar';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import CreatePost from './components/posts/createpost/CreatePost';
import DeletePost from './components/posts/deletepost/DeletePost';
import CreateTheme from './components/theme/createtheme/CreateTheme';
import DeleteTheme from './components/theme/deletetheme/DeleteTheme';

import "./App.css";

function App() {
  return (
  <Router>
    <Navbar/>
      <Switch>
        <div style={{minHeight: '100vh'}}>
          <Route exact path='/'>
            <Login/>
          </Route>

          <Route path='/login'>
            <Login/>
          </Route>

          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/sobre'>
            <About/>
          </Route>

          <Route path='/cadastro'>
            <Register/>
          </Route>

          <Route path='/perfil'>
            <Profile />
          </Route>

          <Route exact path='/formulariopostagem'>
            <CreatePost />
          </Route>
          <Route exact path='/formulariopostagem/:id'>
            <CreatePost />
          </Route>

          <Route exact path='/formulariotema'>
            <CreateTheme />
          </Route>
          <Route exact path='/formulariotema/:id'>
            <CreateTheme />
          </Route> 

          <Route path='/deletarpostagem/:id'>
            <DeletePost />
          </Route>

          <Route path='/deletartema/:id'>
            <DeleteTheme />
          </Route> 

          {/* <Route path='/posts'>
            <PostList />
          </Route>
          <Route path='/temas'>
            <ThemeList />
          </Route>  */}

        </div>
      </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
