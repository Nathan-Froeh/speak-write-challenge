import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signin from './Signin';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Route path='/' component={Signin}/>
  </BrowserRouter>
  
, document.getElementById('root'));


serviceWorker.unregister();
