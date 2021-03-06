import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';
import Favorites from './Favorites';
import MenuO from './MenuO';
import Menu from './Menu';
import ItemPage from './orderItems/ItemPage';
import Checkout from './Checkout';
import './App.css';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/itemPage">
            <ItemPage/>
        </Route>
        <Route path="/checkout">
          <Checkout/>
        </Route>
        <Route path="/menu">
          <Menu/>
        </Route>
        <Route path="/menuOrder">
          <MenuO/>
        </Route>
        <Route path = "/">
          <Header/>
          <Banner/>
          <Favorites/>
          <Footer/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
