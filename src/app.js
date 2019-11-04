import React from 'react';
import ReactDOM from 'react-dom';
// import {createUseStyles} from 'react-jss'
// import './styles/styles.css';
import App from './components/App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Root extends React.Component {
  render(){
    return(
      <Router>
        <Route path="/" component={App} />
        <Route path="/app" render={()=>(<div>App</div>)} />
      </Router>
    );
  }
}


ReactDOM.render(
  <Root />,
  document.getElementById('root')
);
