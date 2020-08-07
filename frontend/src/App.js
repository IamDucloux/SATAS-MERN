import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/navigation'
import Info from './components/info'
  
function App() {
  return (
    <Router>
      <Navigation />
      <Info />
    </Router>
    
  );
}

export default App;
