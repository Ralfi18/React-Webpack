import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from "./components/App";
import Page from "./components/Page";

const Nav = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/page">Page</Link>
    <Link to="/page/1">Page</Link>
  </nav>
);

class Base extends React.Component {
  render() {
    return(
      <Router>
        <Nav/>
        <Route path="/" exact component={App} />
        <Route path="/page" exact component={Page} />
        <Route path="/page/:id" component={Page} />
      </Router>
    );
  }
}

ReactDOM.render(<Base />, document.querySelector("#root"));
