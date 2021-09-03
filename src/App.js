import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Header from './components/header/header.jsx'
import { HomePage } from './pages/homepage/homePage';
import ShopPage from './pages/shoppage/shopPage.jsx'

import './App.css';

function App() {
  return (
      <div>
          <Header />
          <Switch>
              <Route exact path={'/'} component={HomePage} />
              <Route exact path={'/shop'} component={ShopPage} />
          </Switch>
    </div>
  );
}

export default App;
