import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/** ----- */
// import {createUseStyles} from 'react-jss'
// import './styles/styles.css';
import App from './components/App';
import Test from './components/Test';
import Bla from './components/Bla';
const Root = ({ store }) => (
  <Provider store={store}>

      <Router>
          <Route path="/" exact component={App} />
          <Switch>
            <Route path="/test" component={Test} />
            <Route path="/test/edit" component={Test} />
          </Switch>
      </Router>

  </Provider>
)


ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
