import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Components/Home.js';
import Portfolio from './Components/Portfolio.js';
import Contact from './Components/Contact.js';
import Footer from './Components/Footer.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
       <Navbar />
       <Switch>
          <Route path='/' component={Home}  exact/>
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
       </Switch>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
