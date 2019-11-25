import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../src/views/Home";
import Login from "./components/Login";

import './App.css';
import SignUp from './views/user/SignUp';
import ProductDetails from './views/ProductDetails';
import Footer from './components/Footer';
import Cart from './views/cart/Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
      <Route path='/' component={Home} exact /> 
      <Route path='/login' component={Login} exact />
      <Route path='/signUp' component={SignUp} exact />
      <Route path='/productDetails/:id' component={ProductDetails} exact />
      <Route path='/cart' component={Cart} exact />
      </Switch>
      <Footer/>
      </div>
    </BrowserRouter>
    );
    
}

export default App;
