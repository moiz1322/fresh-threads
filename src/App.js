import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Hats from './components/hats';

import './App.css';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={Hats}/>
      </div>
    </Router>
  );
}

export default App;
