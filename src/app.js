import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
/** ----- */
// import {createUseStyles} from 'react-jss'
// import './styles/styles.css';
import App from './components/App';
import Post from './components/Post';
import Bla from './components/Bla';

const Root = ({ store }) => (
  <Provider store={store}>

      <Router>
          <nav>
            <ul>
              <Link to="/">Home</Link>
              <Link to="/post">Post</Link>
              <Link to="/post/1">Post 1</Link>
            </ul>
          </nav>
          <Route path="/" exact component={App} />
          <Switch>
            <Route path="/post" exact component={Post} />
            <Route path="/post/:id" component={Post} />
          </Switch>
      </Router>

  </Provider>
)


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
