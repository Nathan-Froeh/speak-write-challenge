import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Signin from './Signin.jsx';
import User from './User.jsx';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Signin}/>
      <Route exact path='/user' component={User}/>
    </Switch>
  </BrowserRouter>
  
, document.getElementById('root'));


serviceWorker.unregister();
