import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import Info from './components/info'
import Login from './components/login'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Info} />
      <Route path="/login" component={Login} />
    </Router>

  );
}

export default App;
