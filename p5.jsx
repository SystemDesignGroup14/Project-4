import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import './styles.css'; // Import your CSS file

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <Link to="/example" className="nav-link">Example</Link> | <Link to="/states" className="nav-link">States</Link>
      </nav>
    );
  }
}

class RouterComponent extends React.Component {
  render() {
    return (
      <div className="router-container">
        <Switch>
          <Route path="/states" component={States} />
          <Route path="/example" component={Example} />
          <Route exact path="/" render={() => <Redirect to="/example" />} />
        </Switch>
      </div>
    );
  }
}

class P5 extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="app-container">
          <Navigation />
          <RouterComponent />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
