import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Prices from './components/Prices';
import PricesMeat from './components/PricesMeat';
import PricesVegan from './components/PricesVegan';
import Hours from './components/Hours';
import About from './components/About';
import Contacts from './components/Contacts';
import Links from './components/Links';
import MyCarousel from './components/MyCarousel';
import Book from './components/Book'

import '@fortawesome/fontawesome-free/css/all.css';
import './animate.min.css';


function App() {
  return (
    <Router>
      <Route path='/' component={Navigation} />
      <div id="content">
        <Route exact path='/Prices' component={Prices} />
        <Route path='/Prices/Meat' component={PricesMeat} />
        <Route path='/Prices/Vegan' component={PricesVegan} />
        <Route path='/Hours' component={Hours} />
        <Route path='/About' component={About} />
        <Route path='/Contacts' component={Contacts} />
        <Route path='/Book' component={Book} />
        <div id="food-carousel"><MyCarousel /></div>
      </div>
      <div id="address">
        <div id="address-card">
          <h1>WHERE TO FIND US?</h1>
          <p><i className="fas fa-concierge-bell"></i> LeRestaurante</p>
          <p>107 Rue de Rivoli, 75001 Paris</p>
          <a href="https://www.google.com/maps/place/Loulou+Restaurant+Paris/@48.8614845,2.3269972,15.25z/data=!4m5!3m4!1s0x47e66e2f64250cfd:0x3139484128ca8233!8m2!3d48.8630501!4d2.33337" target="_blank" rel="noopener noreferrer" >SHOW ON MAP</a>
        </div>
      </div>
      <Links />
    </Router>
  );
}

export default App;
