import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/about/About";
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
import PostList from './components/posts/postlist/PostList';
import Feed from './pages/feed/Feed';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './store/store';
import "./App.css";


function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <Switch>
          <div style={{ minHeight: '100vh' }}>
            <Route exact path='/'>
              <Login />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/sobre'>
              <About />
            </Route>

            <Route path='/cadastro'>
              <Register />
            </Route>

            <Route path='/posts'>
              <PostList />
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

            <Route path='/feed'>
              <Feed />
            </Route>

            {/* <Route path='/temas'>
            <ThemeList />
          </Route>  */}

          </div>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
