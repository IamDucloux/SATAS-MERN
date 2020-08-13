import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import Info from './components/info'
import Login from './components/login'
import Dashboard from './components/dashboard'
import CreateOrder from './components/createOrder'

function App() {
  return (
    <Router>
      <Navigation />
      <Route path="/" exact component={Info} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/orders" component={CreateOrder} />
    </Router>

  );
}

export default App;
