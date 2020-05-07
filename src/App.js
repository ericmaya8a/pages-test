import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Users from './Users';
import Navigation from './Navigation';
import NotFound from './NotFound';
import './App.css';

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
