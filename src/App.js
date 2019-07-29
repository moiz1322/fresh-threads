import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop';

import './App.css';
import HomePage from './pages/homepage/homepage';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
      </div>
    </Router>
  );
}

export default App;
