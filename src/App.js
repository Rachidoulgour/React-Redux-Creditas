import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "../src/views/Home";
import Login from "../src/views/user/Login";
import Header from '../src/components/Header';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Header/>
      <Switch>
      <Route path='/' component={Home} exact /> 
      <Route path='/login' component={Login} exact />
      </Switch>
      </div>
    </BrowserRouter>
    );
    
}

export default App;
