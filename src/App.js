import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../src/views/Home";
import Login from "../src/views/user/Login";
import Header from '../src/components/Header';
import './App.css';
import SignUp from './views/user/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Switch>
      <Route path='/' component={Home} exact /> 
      <Route path='/login' component={Login} exact />
      <Route path='/SignUp' component={SignUp} exact />
      </Switch>
      </div>
    </BrowserRouter>
    );
    
}

export default App;
