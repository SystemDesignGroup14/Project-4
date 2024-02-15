import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Example from './components/example/Example';
import States from './components/states/States';


class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/example">Example</Link> | <Link to="/states">States</Link>
      </nav>
    );
  }
}

class RouterComponent extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/states" component={States} />
        <Route path="/example" component={Example} />
        <Route exact path="/" render={() => <Redirect to="/example" />} />
      </Switch>
    );
  }
}

class P5 extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Navigation />
          <RouterComponent />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
