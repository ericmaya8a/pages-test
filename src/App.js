import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import Users from './Users';
import Navigation from './Navigation';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
