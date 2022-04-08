import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import TrendingPage from './pages/Trending';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/trending">
            <TrendingPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
