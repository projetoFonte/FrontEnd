import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from"./pages/about/About";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from './components/statics/footer/Footer';
import Navbar from './components/statics/navbar/Navbar';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
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

        </div>
      </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
