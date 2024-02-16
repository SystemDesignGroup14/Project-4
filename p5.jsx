import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect, Link } from 'react-router-dom';
import Example from './components/example/Example';
import States from './components/states/States';
import Header from './components/header/Header';

function Navigation() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px', color: '#fff' }}>
      <Link to="/example" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}>Example</Link> | 
      <Link to="/states" style={{ color: '#fff', textDecoration: 'none' }}>States</Link>
    </nav>
  );
}

function RouterComponent() {
  return (
    <Switch>
      <Route path="/states" component={States} />
      <Route path="/example" component={Example} />
      <Route exact path="/" render={() => <Redirect to="/example" />} />
    </Switch>
  );
}

function P5() {
  return (
    <div>
      <Header />
      <HashRouter>
        <div>
          <Navigation />
          <RouterComponent />
        </div>
      </HashRouter>
    </div>
  );
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
