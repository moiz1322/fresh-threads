import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
