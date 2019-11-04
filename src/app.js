import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {store, persistor} from "./store/index";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
/** ----- */
// import {createUseStyles} from 'react-jss'
// import './styles/styles.css';
import App from './components/App';
import Post from './components/Post';
import Bla from './components/Bla';
import AddPost from './components/AddPost';

const Root = ({ store }) => (
  <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
            <nav>
              <ul>
                <Link to="/">Home</Link>
                <Link to="/post">Post</Link>
                <Link to="/post/1">Post 1</Link>
                <Link to="/post/add">Add Post</Link>
              </ul>
            </nav>
            <Route path="/" exact component={App} />
            <Switch>
              <Route path="/post" exact component={Post} />
              <Route path="/post/:id" component={Post} />
            </Switch>
            <Route path="/post/add" component={AddPost} />
        </Router>
      </PersistGate>
  </Provider>
)


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
