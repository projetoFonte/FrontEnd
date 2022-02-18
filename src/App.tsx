import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./pages/about/About";
import "./pages/home/Home";
import "./pages/login/Login";
import "./components/statics/footer/Footer";
import "./components/statics/navbar/Navbar";
import "./App.css";
import { Home } from '@material-ui/icons';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div>
          
            
          </div>
        </Switch>
      <Footer />  
  </Router>
  );
}

export default App;
