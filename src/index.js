import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signin from './Signin.jsx';
import User from './User.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Route path='/' component={Signin}/>
    <Route path='/user' component={User}/>
  </BrowserRouter>
  
, document.getElementById('root'));


serviceWorker.unregister();
